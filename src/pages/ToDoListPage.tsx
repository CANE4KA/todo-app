import { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Form } from '../components/form/Form'
import { Header } from '../components/header/Header'
import { TodoList } from '../components/todoList/TodoList'

import { ITodo } from '../models/ITodo'

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const updateTodo = (id: number) => {
		setTodos(
			todos.map((todo, index) => {
				if (index === id) {
					todo.isCheck = !todo.isCheck
				}

				return todo
			})
		)
		toast('Task modified')
	}

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((_, index) => index !== id))
		toast('Task deleted')
	}

	return (
		<>
			<Header />
			<Form setTodos={setTodos} todos={todos} toast={toast} />
			<TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
			<ToastContainer
				position='bottom-right'
				autoClose={2000}
				transition={Slide}
			/>
		</>
	)
}
