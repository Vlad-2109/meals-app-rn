import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type CategoryGridTileProps = {
	title: string;
	color: string;
};

const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonPressed,
				]}
				android_ripple={{ color: '#ccc' }}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
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
				shadowOpacity: 0.25,
				shadowRadius: 8,
			},
			default: {},
		}),
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,

		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
