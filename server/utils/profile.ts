import sharp from 'sharp';
import type { MultiPartData } from 'h3'

export const validateProfileCover = async (file: MultiPartData) => {
  const formatsAllowed = ['jpeg', 'jpg', 'png']
  const image = await sharp(file.data).metadata();

  if (image.format && !formatsAllowed.includes(image.format)) {
    throw createError({
      message: 'Invalid file format',
      status: 400
    })
  }

  if (image.size && image.size > 1024 * 1024 * 10) {
    throw createError({
      message: 'File is too large',
      status: 400
    })
  }

  if (image.height && image.height < 300) {
    throw createError({
      message: 'Image must be at least 300px x 1374px',
      status: 400
    })
  }

  if (image.width && image.width < 1374) {
    throw createError({
      message: 'Image must be at least 300px x 1374px',
      status: 400
    })
  }
}

export const validateProfileAvatar = async (file: MultiPartData) => {
  const formatsAllowed = ['jpeg', 'jpg', 'png']
  const image = await sharp(file.data).metadata();

  if (image.format && !formatsAllowed.includes(image.format)) {
    throw createError({
      message: 'Invalid file format',
      status: 400
    })
  }

  if (image.size && image.size > 1024 * 1024 * 10) {
    throw createError({
      message: 'File is too large',
      status: 400
    })
  }

  if (image.width !== image.height) {
    throw createError({
      message: 'Image must be square',
      status: 400
    })
  }

  if (image.width && image.width < 250) {
    throw createError({
      message: 'Image must be at least 250px',
      status: 400
    })
  }

  if (image.width && image.width > 1500) {
    throw createError({
      message: 'Image must be at most 1500px',
      status: 400
    })
  }
}