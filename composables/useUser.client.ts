import { ConnectionStates, signArbitrary, getAddress } from '@quirks/store';

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

  const { address } = useChain('bitsong')

  watch(
    address,
    async () => {
      console.log('--------> Address Changed', address.value)
    },
    {
      immediate: true,
    }
  )

  watch(
    walletStatus,
    async () => {
      console.log('--------> Wallet Status Changed', walletStatus.value)
      console.log('--------> User', user.value)
      if (walletStatus.value === ConnectionStates.DISCONNECTED) {
        if (user.value) {
          await logout()
        }
      }

      if (walletStatus.value === ConnectionStates.CONNECTED) {
        try {
          await login()

          const { data } = await me();
          user.value = data.value?.user || null
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

  const wallet = useQuirks()((state) => state.wallet);
  watch(
    wallet,
    async () => {
      console.log('--------> Wallet Changed', wallet.value)
      if (wallet.value) {
        wallet.value.events.on('keystorechange', () => {
          console.log('keystorechange')
          resetUser()
        })
      }
    },
    {
      immediate: true,
    }
  )

  return user as Ref<User | null>
}