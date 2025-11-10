import { NavigationContainer } from "@react-navigation/native";

import StackRoute from "./stack.route";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  )
}