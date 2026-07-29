import { StyleSheet, Text, View } from 'react-native';

type MealItemProps = {
	title: string;
};

const MealItem = ({ title }: MealItemProps) => {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({});
