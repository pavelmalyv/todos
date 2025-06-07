import type { SubmitHandler } from 'react-hook-form';
import type { InferType } from 'yup';
import type { Todo } from '@/types/todos';
import type { NotificationKey } from '@/types/notification';

import { Controller, useForm } from 'react-hook-form';
import { todoNameFieldSchema } from '@/schemas/fields';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import { useAppDispatch } from '@/store/hooks';
import { v4 as uuid } from 'uuid';
import { addTodo as addTodoAction } from '@/store/todos/todosSlice';
import { useRef } from 'react';
import { FIELDS_MESSAGES, SUCCESS_MESSAGES } from '@/const/messages';

import AppTextField from '../UI/AppTextField';
import useAppNotifications from '@/hooks/useAppNotifications';

const schemaForm = object({
	name: todoNameFieldSchema.required(FIELDS_MESSAGES.todoRequired),
});

type FormData = InferType<typeof schemaForm>;

const AddTodo = () => {
	const prevNotificationSuccessRef = useRef<NotificationKey>(null);
	const dispatch = useAppDispatch();
	const { showSuccess, closeNotification } = useAppNotifications();

	const { control, handleSubmit, reset } = useForm<FormData>({
		resolver: yupResolver(schemaForm),
		defaultValues: {
			name: '',
		},
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		const newTodo: Todo = {
			id: uuid(),
			name: data.name,
			completed: false,
			createdAt: new Date().getTime(),
		};

		dispatch(addTodoAction(newTodo));
		reset();

		closeNotification(prevNotificationSuccessRef.current);
		prevNotificationSuccessRef.current = showSuccess(SUCCESS_MESSAGES.addTodo);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} aria-label="Добавление новой задачи">
			<Controller
				name="name"
				control={control}
				render={({ field: { ref, ...field }, fieldState }) => {
					return (
						<AppTextField
							aria-required="true"
							label="Что нужно сделать?"
							inputRef={ref}
							error={fieldState.invalid}
							helperText={fieldState.error?.message}
							{...field}
						/>
					);
				}}
			/>
		</form>
	);
};

export default AddTodo;
