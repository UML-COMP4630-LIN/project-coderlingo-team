import { Stack } from "expo-router";

{/** Display all of the screen in the (tabs) folder */}
export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
  </Stack>
}
