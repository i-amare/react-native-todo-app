import { Todo } from "../types";
import { TextInput, View } from "react-native";

interface IInput {
	addTodo: (todo: Todo) => void;
}

export default function Input({ addTodo }: IInput) {
	return (
		<View>
			<TextInput
				onSubmitEditing={(e) => addTodo(new Todo(e.nativeEvent.text))}
				placeholder='Enter Task'
				className='w-11/12 h-8 rounded-md m-auto mt-16 p-6 bg-slate-100 font-semibold'
			/>
		</View>
	);
}
