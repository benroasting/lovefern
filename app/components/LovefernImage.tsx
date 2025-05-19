import { Image, useWindowDimensions } from 'react-native';

type Props = {
    size?: number
    imageUri?: string
}

export function LovefernImage({ size, imageUri }: Props) {

    const { width } = useWindowDimensions();
    const imageSize = size ?? Math.min(width / 1.5, 400);

    return (
        <Image source={imageUri ? { uri: imageUri } : require("@/assets/PlantLogo.png")} style={{ width: imageSize, height: imageSize, borderRadius: 8}} />
    )
}
