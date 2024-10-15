import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Form.module.scss'

import { IForm } from '../../models/IForm'
import { IInputs } from '../../models/IInputs'

export const Form: FC<IForm> = ({ createTodo }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IInputs>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IInputs> = data => {
		createTodo(data.todoText)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='text' {...register('todoText', { required: true })} />
				{errors.todoText && <span>This field is required</span>}
				<button></button>
			</form>
		</div>
	)
}
