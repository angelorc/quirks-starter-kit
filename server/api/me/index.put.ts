import { NFTStorage, Blob } from 'nft.storage'

const client = new NFTStorage({ token: useRuntimeConfig().nftStorageApiKey })

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();
  const user = session?.user ?? null

  if (user === null) {
    throw createError({
      message: 'You must be logged in to upload',
      status: 401
    })
  }

  const data = await readMultipartFormData(event)
  if (data === undefined || data.length === 0) {
    throw createError({
      message: 'No data',
      status: 400
    })
  }

  const avatar = data.find((item) => item.name === 'avatar')
  const cover = data.find((item) => item.name === 'cover')
  const username = data.find((item) => item.name === 'username')?.data.toString()

  if (!avatar || !cover || !username) {
    throw createError({
      message: 'Missing data',
      status: 400
    })
  }

  await validateProfileAvatar(avatar)
  await validateProfileCover(cover)

  // TODO: validate username

  const avatarCid = await client.storeBlob(new Blob([avatar.data], { type: avatar.type }))
  //const avatarUrl = `https://${avatarCid}${useRuntimeConfig().public.ipfsGatewaySuffix}`
  //const avatarUrl = `${useRuntimeConfig().public.ipfsGateway}${avatarCid}`

  const coverCid = await client.storeBlob(new Blob([cover.data], { type: cover.type }))
  //const coverUrl = `https://${coverCid}${useRuntimeConfig().public.ipfsGatewaySuffix}`
  //const coverUrl = `${useRuntimeConfig().public.ipfsGateway}${coverCid}`

  console.log('username', username)

  try {
    const updatedUser = await auth.updateUserAttributes(user.userId, {
      username,
      avatar: avatarCid,
      cover: coverCid
    })

    return {
      user: updatedUser
    }
  } catch (error) {
    console.log('error', error)
    throw createError({
      message: 'Something went wrong',
      status: 400
    })
  }
})