import { ConnectionStates, signArbitrary, getAddress } from '@quirks/store';
import { useUserState, type User } from './useUserState';

export const useUser = () => {
  const user = useUserState()

  const createMsg = () => {
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

    return {
      address,
      msg,
      chainId,
      appName,
      links,
    }
  }

  const { status, disconnect } = useConnect();

  watch(
    status,
    async () => {
      console.log('--------> Wallet Status Changed', status.value)
      console.log('--------> User', user.value)
      if (status.value === ConnectionStates.DISCONNECTED) {
        if (user.value) {
          console.log('--------> Logout')
          useAsyncData('logout', async () => {
            const data = await $fetch('/api/auth/logout', {
              method: 'POST'
            })
            user.value = null
            console.log('--------> New User Value', user.value)

            return data
          })
        }
      }

      if (status.value === ConnectionStates.CONNECTED) {
        if (user.value === null || user.value.address !== getAddress("bitsong")) {
          console.log('--------> Login')
          useAsyncData('login', async () => {
            try {
              const { address, chainId, msg } = createMsg()

              const { pub_key, signature } = await signArbitrary(
                chainId,
                address,
                msg,
              );

              await $fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                  msg: window.btoa(
                    JSON.stringify({
                      address,
                      msg,
                      pub_key,
                      signature,
                    }),
                  )
                }),
              })

              const data = await $fetch<{ user: User }>('/api/me')

              if (data.user.address !== getAddress("bitsong")) {
                await $fetch('/api/auth/logout', {
                  method: 'POST'
                })
                user.value = null

                throw new Error('Address mismatch, disconnected!')
              }

              user.value = data.user || null
              console.log('--------> New User Value', user.value)
            } catch (error) {
              console.error(error)

              disconnect()

              await $fetch('/api/auth/logout', {
                method: 'POST',
              })

              user.value = null
            }
          })
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