import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    title:"Home",
                    headerRight: () => (
                        <Link href="/new" asChild>
                        <Pressable hitSlop={20}>
                            <AntDesign
                            name="pluscircleo"
                            size={24}
                            color={theme.colorGreen}
                            />
                        </Pressable>
                        </Link>
                )
            }}/>
            <Stack.Screen name="plants/[id]" options={{
                title: "",
                }} />
        </Stack>
     )
}
