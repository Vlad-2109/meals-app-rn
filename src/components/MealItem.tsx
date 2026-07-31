import { useLocalSearchParams, useRouter } from 'expo-router';
import {
	Image,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import MealDetails from './MealDetails';

type MealItemProps = {
	mealId: string;
	title: string;
	imageUrl: string;
	duration: number;
	complexity: string;
	affordability: string;
};

const MealItem = ({
	mealId,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}: MealItemProps) => {
	const { categoryId } = useLocalSearchParams();
	const router = useRouter();

	const handleMealPress = (mealId: string) => {
		router.push({
			pathname: '/category/[categoryId]/meal/[mealId]',
			params: { categoryId: categoryId as string, mealId },
		});
	};
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => pressed && styles.itemPressed}
				onPress={() => handleMealPress(mealId)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: 'white',
		...Platform.select({
			android: {
				elevation: 4,
				overflow: 'hidden',
			},
			ios: {
				shadowColor: 'black',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.35,
				shadowRadius: 8,
			},
			default: {},
		}),
	},
	itemPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
});
