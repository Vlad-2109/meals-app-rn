import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MealsOverview = () => {
	const { categoryId } = useLocalSearchParams();

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Meals Overview',
				}}
			/>
			<View style={styles.innerContainer}>
				<Text>Meals Overview for {categoryId}</Text>
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
