import { Image, useWindowDimensions } from 'react-native';


export function LovefernImage() {

    const { width } = useWindowDimensions();
    const imageSize = Math.min(width / 1.5, 400);

    return (
        <Image source={require("@/assets/PlantLogo.png")} style={{ width: imageSize, height: imageSize}} />
    )
}
