 /*
    * File: _layout.tsx
    * Description: layout file for quiz screen 
*/

import { Stack } from "expo-router";

export default function QuizLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}}/>
    <Stack.Screen name="result" options={{ headerShown: false}}/>
  </Stack>;
}
