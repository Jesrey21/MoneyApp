import "@/global.css"
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout(){
    const [fontsLoaded] = useFonts({
        "sans-regular": require("./assets/images/fonts/PlusJakartaSans-Regular.ttf"),
        "sans-medium": require("./assets/images/fonts/PlusJakartaSans-Medium.ttf"),
        "sans-bold": require("./assets/images/fonts/PlusJakartaSans-Bold.ttf"),
        "sans-semiBold": require("./assets/images/fonts/PlusJakartaSans-SemiBold.ttf"),
        "sans-extraBold": require("./assets/images/fonts/PlusJakartaSans-ExtraBold.ttf"),
    })
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }   
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;

    return <Stack screenOptions={{headerShown: false}} />;
}