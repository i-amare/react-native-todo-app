import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	FlatList,
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Card from "./components/card";
import Input from "./components/input";
import { Todo } from "./types";

export default function App() {
	const [list, setList] = useState<Todo[]>([]);
	const [completedList, setCompletedList] = useState<Todo[]>([]);

	/**
	 * Adds a Todo element to the list
	 * @param todoItem A Todo item
	 */
	function addTodo(todoItem: Todo) {
		setList([todoItem, ...list]);
	}

	/**
	 * Deletes a Todo element with a specified id
	 * @param id The id of the Todo element to be deleted
	 */
	function removeTodo(id: string) {
		setList((prevList) => {
			return prevList.filter((todoItem) => todoItem.getId() != id);
		});
	}

	function toggleTodo(todo: Todo) {
		if (todo.isCompleted()) {
			setList([todo, ...list]);
			setCompletedList((prevList) => {
				return prevList.filter((todoItem) => todoItem.getId() != todo.getId());
			});
		} else {
			setCompletedList([todo, ...completedList]);
			setList((prevList) => {
				return prevList.filter((todoItem) => todoItem.getId() != todo.getId());
			});
		}
		todo.toggleCompletion();
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View className='w-screen h-screen flex bg-black'>
				<Input addTodo={addTodo} />
				<FlatList
					className='w-11/12 m-auto h-min'
					data={list}
					keyExtractor={(todoItem) => todoItem.getId()}
					renderItem={({ item }) => {
						return item.isCompleted() ? (
							<></>
						) : (
							<Card
								todoItem={item}
								toggleTodo={toggleTodo}
								removeItem={removeTodo}
							/>
						);
					}}
				/>
				<FlatList
					className='w-11/12 m-auto'
					data={completedList}
					keyExtractor={(todoItem) => todoItem.getId()}
					renderItem={({ item }) => {
						return item.isCompleted() ? (
							<Card
								todoItem={item}
								toggleTodo={toggleTodo}
								removeItem={removeTodo}
							/>
						) : (
							<></>
						);
					}}
				/>
				<StatusBar />
			</View>
		</TouchableWithoutFeedback>
	);
}
