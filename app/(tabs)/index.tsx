import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
    <View className="flex-1 bg-background j ustify-top p-5">
      <SafeAreaView className="flex-1 px-5 pt-5">
        
        {/* Title */}
        <Text className="text-2xl font-extrabold text-primary">
          Welcome to MyApp!
        </Text>

        {/* Buttons */}
        <View className="mt-6 gap-4">
          <Link
            href="/onBoarding"
            className="rounded-2xl bg-primary text-white text-center py-4 "
          >
            Go to Onboarding
          </Link>

          <Link
            href="/(auth)/sign-in"
            className="rounded-xl bg-primary text-white text-center py-4"
          >
            Sign In
          </Link>

          <Link
            href="/(auth)/sign-up"
            className="rounded-xl bg-primary text-white text-center py-4"
          >
            Sign Up
          </Link>
        </View>

        {/* Subscriptions */}
        <View className="mt-8 gap-2">
          <Link href="/subscription/spotify" className="text-base text-gray-700">
            Spotify Subscription
          </Link>

          <Link
            href={{
              pathname: "/subscription/[id]",
              params: { id: "claude" },
            }}
            className="text-base text-gray-700"
          >
            Claude Max Subscription
          </Link>
        </View>

      </SafeAreaView>
    </View>
  );
}

function Styled() {
  throw new Error("Function not implemented.");
}
