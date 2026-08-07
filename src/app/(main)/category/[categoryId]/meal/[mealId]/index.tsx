import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MEALS } from '@/data/dummy-data';

import IconButton from '@/components/IconButton';
import List from '@/components/MealDetail/List';
import Subtitle from '@/components/MealDetail/Subtitle';
import MealDetails from '@/components/MealDetails';

const MealDetailScreen = () => {
	const { mealId } = useLocalSearchParams();

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const handleHeaderButtonPress = () => {
		console.log('Header button pressed');
	};

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: selectedMeal?.title,
					headerRight: () => (
						<IconButton
							icon="star"
							color="white"
							onPress={handleHeaderButtonPress}
						/>
					),
				}}
			/>
			<ScrollView>
				<Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
				<Text style={styles.title}>{selectedMeal?.title}</Text>
				<MealDetails
					duration={selectedMeal?.duration ?? 0}
					complexity={selectedMeal?.complexity ?? ''}
					affordability={selectedMeal?.affordability ?? ''}
					textStyle={styles.detailText}
				/>
				<View style={styles.listOuterContainer}>
					<View style={styles.listContainer}>
						<Subtitle>Ingredients</Subtitle>
						<List data={selectedMeal?.ingredients ?? []} />
						<Subtitle>Steps</Subtitle>
						<List data={selectedMeal?.steps ?? []} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
});
