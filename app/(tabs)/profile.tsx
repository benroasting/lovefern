import { View, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { useUserStore } from "../../store/userStore";
import { CustomButton } from "../components/CustomButton";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <CustomButton title="Back to Onboarding" onPress={toggleHasOnboarded} />
    </View>
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
