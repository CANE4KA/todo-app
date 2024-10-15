import cn from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './ListItem.module.scss'

import { ITodo } from '../../models/ITodo'

interface IListItem {
	todo: ITodo
	id: number
}

export const ListItem: FC<IListItem> = ({ todo, id }) => {
	return (
		<Link
			className={cn(styles.link, {
				[styles.check]: todo.isCheck,
				[styles.notCheck]: !todo.isCheck
			})}
			to={`/list/${id}`}
			target='_blank'
		>
			{todo.text}
		</Link>
	)
}
