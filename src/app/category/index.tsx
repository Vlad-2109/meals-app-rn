import { Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router';

const MealsOverview = () => {
	// const router = useRouter();

	// router.push(`/game/${chosenNumber}`);

	return (
		<SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Meals Overview',
				}}
			/>
			<Text>Meals Overview</Text>
		</SafeAreaView>
	);
};

export default MealsOverview;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
