import { FC } from 'react'

import { ITodo } from '../../models/ITodo'

import { ListItemLink } from './ListItem.styled'

interface IListItem {
	todo: ITodo
	id: number
}

export const ListItem: FC<IListItem> = ({ todo, id }) => {
	return (
		<ListItemLink to={`/list/${id}`} target='_blank' $isCheck={todo.isCheck}>
			{todo.text}
		</ListItemLink>
	)
}
