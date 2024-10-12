import { ITodo } from './ITodo'

export interface ITodoList {
	todos: ITodo[]
	updateTodo: Function
	deleteTodo: Function
}
