import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ITodo } from '../models/ITodo'

import { RootState } from '../store'

export const ViewListItem = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos)
	const [todo, setTodo] = useState<ITodo>()
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const todo = todoList.find((_, index) => String(index) === id)
		if (!todo) {
			navigate('/notFound')
		}

		setTodo(todo)
	}, [todoList, id, navigate])

	return (
		<div className='container'>
			<h1>{todo?.text}</h1>
		</div>
	)
}
