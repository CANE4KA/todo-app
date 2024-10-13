import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ITodo } from '../models/ITodo'

interface IItemDescription {
	todos: ITodo[]
}

export const ItemDescription: FC<IItemDescription> = ({ todos }) => {
	const [todo, setTodo] = useState<ITodo>()
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const todo = todos.find((_, index) => String(index) === id)
		if (!todo) {
			navigate('/notFound')
		}

		setTodo(todo)
	}, [todos, id, navigate])

	return (
		<div className='container'>
			<h1>{todo?.text}</h1>
		</div>
	)
}
