export const useIpfsLink = (cid: Ref<string> | string | undefined) => {
  if (!cid) return
  //return `https://${cid}.ipfs.nftstorage.link`
  return `https://bas-cdn.com/ipfs/${cid}`
}