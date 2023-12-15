import { ConnectionStates, signArbitrary } from '@quirks/store';

interface User {
  userId: string;
  address: string;
  username: string | null;
  image: string | null;
  image_cover: string | null;
}

const createMsg = async (appName: string, links: { tos: string, privacy: string }) => {
  const address = getAddress("bitsong");
  const rawMsg = `Welcome to ${appName}!

Click to sign in and accept the ${appName} Terms of Service (${links.tos}) and Privacy Policy (${links.privacy}).

This request will not trigger a blockchain transaction or cost any gas fees.

Wallet address:
${address}

Domain:
${window.location.hostname}

Date:
${new Date().toUTCString()}`;

  const signedMsg = await signArbitrary(
    "bitsong-2b",
    address,
    rawMsg,
  );

  return window.btoa(
    JSON.stringify({
      signer: address,
      rawMsg,
      ...signedMsg,
    }),
  );
}

export const useUser = () => {
  const connected = useQuirks()(
    (state) => state.status === ConnectionStates.CONNECTED,
  );

  const disconnect = useQuirks()(
    (state) => state.disconnect,
  );

  const user = useState<User | null>('user', () => null)

  watch(
    connected,
    async () => {
      if (!connected.value) {
        user.value = null
      } else {
        const data = await $fetch('/api/user')
        user.value = data.user

        if (!user.value) {
          const msg = await createMsg("BitSong Studio", {
            tos: "https://bitsong.io/tos",
            privacy: "https://bitsong.io/privacy",
          })

          $fetch<{ user: User }>('/api/token', {
            method: 'POST',
            body: JSON.stringify({ msg }),
          }).then(res => user.value = res.user).catch(() => {
            disconnect()
            user.value = null
          })
        }
      }
    },
    {
      immediate: true,
    }
  )

  return user as Ref<User | null>
}