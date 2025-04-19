import { Stack } from "expo-router";

export default function StudyLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}}/>
    <Stack.Screen name="result" options={{ headerShown: false}}/>
  </Stack>
}
