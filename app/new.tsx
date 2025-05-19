import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { theme } from "@/theme";

// Components
import { LovefernImage } from "./components/LovefernImage";
import { CustomButton } from "./components/CustomButton";
import { usePlantStore } from "@/store/plantStore";

export default function NewPlant() {
    const [plantName, setPlantName] = useState<string>();
    const [days, setDays] = useState<string>();
    const [imageUri, setImageUri] = useState<string>();
    const addPlant = usePlantStore((state) => state.addPlant);
    const router = useRouter();

    const handleSubmit = () => {
        if (!plantName) {
            return Alert.alert('Validation Error', 'Give your plant name');
        }

        if (!days) {
            return Alert.alert('Validation Error', `How often does ${plantName} need to be watered?`);
        }

        if (Number.isNaN(Number(days))) {
            return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
        );
        }
    
        (addPlant(plantName, Number(days), imageUri));
        router.navigate("/");
    }  
    
    const handleChooseImage = async () => {
        if (Platform.OS === "web") {
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
        })
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    }

  return (
    <KeyboardAwareScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
    >
        <TouchableOpacity 
            style={styles.centered} 
            activeOpacity={0.8} 
            onPress={handleChooseImage}
        >
            <LovefernImage imageUri={imageUri}/>
        </TouchableOpacity>
        <Text style={styles.label}>Plant Name</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter plant name"
            value={plantName}
            onChangeText={setPlantName}
            autoCapitalize="words" />
        <Text style={styles.label}>Watering Frequency (every x days)</Text>
        <TextInput
            value={days}
            onChangeText={setDays}
            style={styles.input}
            placeholder="3"
            keyboardType="number-pad"
        />
        <CustomButton title="Add Plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});
