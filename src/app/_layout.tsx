import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<StatusBar style="light" />
			<Drawer
				screenOptions={{
					headerStyle: { backgroundColor: '#321401' },
					headerTintColor: 'white',
					drawerStyle: { backgroundColor: '#321401' },
					drawerActiveTintColor: 'white',
					drawerInactiveTintColor: '#ccc',
				}}
			>
				<Drawer.Screen
					name="(main)"
					options={{
						headerShown: false,
						title: 'Categories',
						drawerLabel: 'Categories',
						drawerIcon: ({ color, size }) => (
							<Ionicons color={color} size={size} name="list" />
						),
					}}
				/>
				<Drawer.Screen
					name="favorites"
					options={{
						headerShown: true,
						title: 'Favorites',
						drawerLabel: 'Favorites',
						drawerIcon: ({ color, size }) => (
							<Ionicons color={color} size={size} name="star" />
						),
					}}
				/>
			</Drawer>
		</SafeAreaProvider>
	);
}
