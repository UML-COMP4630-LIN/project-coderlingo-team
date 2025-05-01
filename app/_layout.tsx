 /*
    * File: _layout.tsx
    * Description: Default layout file for the entire app.
*/

import { Stack } from 'expo-router';
import { ThemeProvider } from './theme/theme_manager';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
