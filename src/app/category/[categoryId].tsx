import { Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MEALS } from '@/data/dummy-data';

import MealItem from '@/components/MealItem';

const MealsOverview = () => {
	const { categoryId } = useLocalSearchParams();

	const displayedMeals = MEALS.filter((mealItem) =>
		mealItem.categoryIds.includes(categoryId as string),
	);

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Meal Overview',
				}}
			/>
			<View style={styles.innerContainer}>
				<FlatList
					data={displayedMeals}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<MealItem
							title={item.title}
							imageUrl={item.imageUrl}
							duration={item.duration}
							complexity={item.complexity}
							affordability={item.affordability}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default MealsOverview;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
	},
});
