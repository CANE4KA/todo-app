import { ITodo } from './ITodo'

export interface IForm {
	setTodos: Function
	todos: ITodo[]
	toast: Function
}
