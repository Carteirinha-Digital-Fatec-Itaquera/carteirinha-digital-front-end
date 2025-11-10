import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../ui/screens/Home"
import Login from "../ui/screens/Login"

const Stack = createNativeStackNavigator()

export default function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  )
}