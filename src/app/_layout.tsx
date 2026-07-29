import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					headerShown: true,
					headerStyle: {
						backgroundColor: '#321401',
					},
					headerBackButtonDisplayMode: 'minimal',
					headerTintColor: 'white',
					contentStyle: {
						backgroundColor: '#3f2f25',
					},
				}}
			/>
		</SafeAreaProvider>
	);
}
