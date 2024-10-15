import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IForm } from '../../models/IForm'
import { IInputs } from '../../models/IInputs'

import { FormButton, FormInput, FormWrapper } from './Form.styled'

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
		<FormWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormInput type='text' {...register('todoText', { required: true })} />
				{errors.todoText && <span>This field is required</span>}
				<FormButton></FormButton>
			</form>
		</FormWrapper>
	)
}
