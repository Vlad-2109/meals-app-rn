import { Stack, useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoryGridTile from '@/components/CategoryGridTile';
import { CATEGORIES } from '@/data/dummy-data';

const StartGame = () => {
	const router = useRouter();

	const handleCategoryPress = (categoryId: string) => {
		router.push({
			pathname: '/category/[categoryId]',
			params: {
				categoryId,
			},
		});
	};

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: 'All Categories',
				}}
			/>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<CategoryGridTile
						title={item.title}
						color={item.color}
						onPress={() => handleCategoryPress(item.id)}
					/>
				)}
				numColumns={2}
			/>
		</SafeAreaView>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
