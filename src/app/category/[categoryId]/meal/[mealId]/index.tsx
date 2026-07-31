import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MEALS } from '@/data/dummy-data';

const MealDetailScreen = () => {
	const { mealId } = useLocalSearchParams();

	const mealTitle = MEALS.find((meal) => meal.id === mealId)?.title;

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: mealTitle,
				}}
			/>
			<View></View>
		</SafeAreaView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
