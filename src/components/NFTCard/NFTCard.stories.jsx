import NFTCard from './NFTCard'

export default {
  title: '1.Web3-Components/NFT',
  component: NFTCard
}
const Template = (args) => <NFTCard {...args} />

export const ColaventNFT = Template.bind({})
ColaventNFT.args = {
  chainId: '1',
  contractAddress: '0x61e3d1c26802df805e9fc22dc26342e29ecfe860',
  tokenId: '81',
  cardWidth: 240,
  cardHeight: 360
}