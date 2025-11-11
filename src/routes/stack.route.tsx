import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../ui/screens/home/HomeScreen"
import LoginScreen from "../ui/screens/login/LoginScreen"

const Stack = createNativeStackNavigator()

export default function StackRoute() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}