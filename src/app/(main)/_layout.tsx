import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
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
	);
}
