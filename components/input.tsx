import { TextInput, View } from "react-native";
import { Todo } from "../types";
import { useState } from "react";

interface IInput {
	addTodo: (todoItem: Todo) => void;
}

export default function Input({ addTodo }: IInput) {
	const [text, setText] = useState("");

	return (
		<View>
			<TextInput
				onSubmitEditing={() => addTodo(new Todo(text))}
				placeholder='Enter Task'
				onChangeText={setText}
				value={text}
				className='w-11/12 h-8 rounded-md m-auto mt-16 mb-6 p-6 bg-slate-100 font-semibold text-md'
			/>
		</View>
	);
}
