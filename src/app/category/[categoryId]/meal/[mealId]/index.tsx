import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MEALS } from '@/data/dummy-data';

import MealDetails from '@/components/MealDetails';

const MealDetailScreen = () => {
	const { mealId } = useLocalSearchParams();

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: selectedMeal?.title,
				}}
			/>
			<View>
				<Image source={{ uri: selectedMeal?.imageUrl }} />
				<Text>{selectedMeal?.title}</Text>
				<MealDetails
					duration={selectedMeal?.duration ?? 0}
					complexity={selectedMeal?.complexity ?? ''}
					affordability={selectedMeal?.affordability ?? ''}
				/>
				<Text>Ingredients</Text>
				{selectedMeal?.ingredients.map((ingredient) => (
					<Text key={ingredient}>{ingredient}</Text>
				))}
				<Text>Steps</Text>
				{selectedMeal?.steps.map((step) => (
					<Text key={step}>{step}</Text>
				))}
			</View>
		</SafeAreaView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
