import { ITodo } from './ITodo'

export interface ITodoItem {
	todo: ITodo
	id: number
	updateTodo: Function
	deleteTodo: Function
}
