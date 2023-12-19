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

  if (!username) {
    throw createError({
      message: 'Username is required',
      status: 400
    })
  }

  // TODO: validate username
  // console.log('username', username)

  let attrs: Partial<Lucia.DatabaseUserAttributes> = {
    username
  }

  if (avatar !== undefined) {
    if (avatar.data.toString() === null || avatar.data.toString() === '') {
      attrs.avatar = null
    } else {
      await validateProfileAvatar(avatar)
      attrs.avatar = await client.storeBlob(new Blob([avatar.data], { type: avatar.type }))
    }
  }

  if (cover !== undefined) {
    if (cover.data.toString() === null || cover.data.toString() === '') {
      attrs.cover = null
    } else {
      await validateProfileCover(cover)
      attrs.cover = await client.storeBlob(new Blob([cover.data], { type: cover.type }))
    }
  }

  try {
    const updatedUser = await auth.updateUserAttributes(user.userId, attrs)
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