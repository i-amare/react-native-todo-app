import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import Input from "./components/input";
import { Todo } from "./types";
import { useState } from "react";

export default function App() {
	const [list, setList] = useState<Todo[]>([]);

	/**
	 * Adds a Todo element to the list
	 * @param todo A Todo item
	 */
	function addTodo(todo: Todo) {
		setList((prevList) => {
			prevList.push(todo);
			return prevList;
		});
		alert(list[list.length - 1].getTitle());
	}

	/**
	 * Deletes a Todo element with a specified id
	 * @param id The id of the Todo element to be deleted
	 */
	function removeTodo(id: string) {
		setList((prevList) => {
			return prevList?.filter((todo) => todo.getId() != id);
		});
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View className='w-screen h-screen flex bg-black'>
				<Input addTodo={addTodo} />
				{/* <StatusBar /> */}
			</View>
		</TouchableWithoutFeedback>
	);
}
