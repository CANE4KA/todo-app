import { Form } from '../components/form/Form'
import { Header } from '../components/header/Header'
import { TodoList } from '../components/todoList/TodoList'

export const ToDoListPage = () => {
	return (
		<>
			<Header />
			<Form />
			<TodoList />
		</>
	)
}
