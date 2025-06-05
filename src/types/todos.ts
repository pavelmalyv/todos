export type TodoId = string;
export type TodosState = { [key: TodoId]: Todo };

export interface Todo {
	id: TodoId;
	name: string;
	completed: boolean;
	createdAt: number;
}
