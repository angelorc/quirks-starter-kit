import { ConnectionStates, signArbitrary, getAddress } from '@quirks/store';
import { useWalletEvents } from '@quirks/vue';

interface User {
  userId: string;
  address: string;
  username: string | null;
  image: string | null;
  image_cover: string | null;
}

export const useUser = () => {
  const walletStatus = useQuirks()(
    (state) => state.status,
  );

  const disconnect = useQuirks()(
    (state) => state.disconnect,
  );

  const user = useState<User | null>('user', () => null)

  const { status } = useConnect();

  const createMsg = async () => {
    const { appName, links, chainId } = useRuntimeConfig().public
    const address = getAddress("bitsong");
    const msg = `Welcome to ${appName}!

Click to sign in and accept the ${appName} Terms of Service (${links.tos}) and Privacy Policy (${links.privacy}).

This request will not trigger a blockchain transaction or cost any gas fees.

Wallet address:
${address}

Domain:
${window.location.hostname}

Date:
${new Date().toUTCString()}`;

    const { pub_key, signature } = await signArbitrary(
      chainId,
      address,
      msg,
    );

    return window.btoa(
      JSON.stringify({
        address,
        msg,
        pub_key,
        signature,
      }),
    );
  }

  const login = async () => {
    try {
      const msg = await createMsg()

      return useFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ msg }),
      })
    } catch (_) {
      resetUser()
    }
  }

  const me = async () => useFetch('/api/me')

  const logout = async () => useFetch('/api/auth/logout', {
    method: 'POST'
  })

  const resetUser = () => {
    if (walletStatus.value === ConnectionStates.CONNECTED) {
      disconnect()
    }

    logout()
    user.value = null
  }

  // const { address } = useChain('bitsong')

  // watch(
  //   address,
  //   async () => {
  //     console.log('--------> Address Changed', address.value)
  //   },
  //   {
  //     immediate: true,
  //   }
  // )

  watch(
    status,
    async () => {
      console.log('--------> Wallet Status Changed', status.value)
      console.log('--------> User', user.value)
      if (status.value === ConnectionStates.DISCONNECTED) {
        if (user.value) {
          await logout()
        }
      }

      if (status.value === ConnectionStates.CONNECTED) {
        try {
          console.log('--------> Login')
          await login()

          const { data } = await me();
          user.value = data.value?.user || null

          console.log('--------> New User Value', user.value)
        } catch (error) {
          console.error(error);
          resetUser()
        }
      }
    },
    {
      immediate: true,
    }
  )

  // useWalletEvents("keystorechange", () => {
  //   console.log('keystorechange')
  //   //resetUser()
  // })

  return user as Ref<User | null>
}