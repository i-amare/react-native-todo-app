import * as React from "react";
import { Text, TouchableHighlight } from "react-native";
import { Todo } from "../types";

interface cardProps {
	todoItem: Todo;
	removeItem: (id: string) => void;
}

export default function Card({ todoItem, removeItem }: cardProps) {
	return (
		<TouchableHighlight
			underlayColor='crimson'
			onPress={() => todoItem.toggleCompletion()}
			className='bg-slate-800 w-full p-6 rounded-md my-1 mx-auto font-bold'
		>
			{todoItem.isCompleted() ? (
				<Text className='text-gray-400 line-through'>
					{todoItem.getTitle()}
				</Text>
			) : (
				<Text className='text-white font-bold'>{todoItem.getTitle()}</Text>
			)}
		</TouchableHighlight>
	);
}
