import { tabs } from "@/assets/images/constants/data";
import { View, Image, Animated } from "react-native";
import { colors, components } from "@/assets/images/constants/theme";
import { Tabs } from "expo-router";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar =  components.tabBar;

// 👇 Type
type TabIconProps = {
  focused: boolean;
  icon: any;
};

// 👇 Keep animation logic
const TabIcon = ({ focused, icon }: TabIconProps) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.2 : 1,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <View className="tabs-icon">
      <View className="tabs-icon">
        <Animated.View
          style={{ transform: [{ scale }] }}
          className={clsx("tabs-pill", focused && "tabs-pill-active")}
        >
          <Image source={icon} className="tabs-glyph" />
        </Animated.View>
      </View>
    </View>
  );
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(
            insets.bottom,
            components.tabBar.horizontalInset
          ),
          height: components.tabBar.height,
          borderRadius: components.tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle:{
          paddingVertical: tabBar.height / 3 - tabBar.iconFrame / 1.6
        },
        tabBarIconStyle:{
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;