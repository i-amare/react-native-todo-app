import * as React from "react";
import { Text, TouchableHighlight } from "react-native";
import { Todo } from "../types";

interface cardProps {
	todoItem: Todo;
	toggleTodo: (todoItem: Todo) => void;
	removeItem: (id: string) => void;
}

export default function Card({ todoItem, removeItem, toggleTodo }: cardProps) {
	return (
		<TouchableHighlight
			underlayColor='crimson'
			onPress={() => toggleTodo(todoItem)}
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
