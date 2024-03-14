import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if (focused) {
              return <Ionicons size={25} color={color} name="home" />;
            }
            <Ionicons size={25} color={color} name="home-outline" />;
          },
        }}
      />

      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if (focused) {
              return <Ionicons size={25} color={color} name="lock-closed" />;
            }
            <Ionicons size={25} color={color} name="lock-closed-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
