import { Stack } from 'expo-router';
import React from 'react';

/**
 * Stack Navigator - Ready for future implementation
 * 
 * Use this for creating stack-based navigation flows
 * Example: Authentication flow, onboarding, multi-step forms
 */
export default function StackNavigator() {
  return (
    <Stack>
      <Stack.Screen name="example" options={{ title: 'Example Screen' }} />
      {/* Add more stack screens here */}
    </Stack>
  );
}
