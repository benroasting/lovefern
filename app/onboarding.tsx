import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";
import { CustomButton } from "./components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { LovefernImage } from "./components/LovefernImage";

export default function App() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorAppleGreen, theme.colorWhite]}
      style={styles.container}
    >
      <LovefernImage />
      <CustomButton title="Start Growing!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
