import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router';

import CategoryGridTile from '@/components/CategoryGridTile';
import { CATEGORIES } from '@/data/dummy-data';

const StartGame = () => {
	// const router = useRouter();

	// router.push(`/game/${chosenNumber}`);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<CategoryGridTile title={item.title} color={item.color} />
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
