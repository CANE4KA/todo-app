import { ITodo } from './ITodo'

export interface ITodoItem {
	todo: ITodo
	id: string
	updateTodo: Function
	deleteTodo: Function
}
