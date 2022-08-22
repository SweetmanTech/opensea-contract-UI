import { Box, Input, Text, Textarea } from 'degen'
import { MediaPicker } from '@components/MediaPicker.tsx'
import { useMusicMetadata } from 'music-metadata-ipfs'

const MusicMetadataForm = () => {
  const { metadata, setMetadata } = useMusicMetadata()

  return (
    <>
      <Input
        placeholder={metadata.name}
        label="contract name (opensea & etherscan)"
        onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
      />
      <Textarea
        placeholder={metadata.description}
        label="contract description (opensea)"
        onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
      />
      <MediaPicker
        id="image"
        compact
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="contract image (opensea)"
        onError={console.error}
        onChange={(e) => setMetadata({ ...metadata, image: e })}
      />
      <Input
        placeholder={metadata.external_link}
        label="contract external link (opensea)"
        onChange={(e) => setMetadata({ ...metadata, external_link: e.target.value })}
      />
      <Input
        placeholder={100}
        label="seller fee basis points (100 = 1% seller fee)"
        type="number"
        step="1"
        min={0}
        onChange={(e) =>
          setMetadata({ ...metadata, seller_fee_basis_points: e.target.value })
        }
      />
      <Box marginBottom="12"></Box>
    </>
  )
}

export default MusicMetadataForm
