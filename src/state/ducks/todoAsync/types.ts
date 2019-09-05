export interface TodoAsync {
  id: number;
  text: string;
  completed: boolean;
}
export interface TodoAsyncState {
  todos: TodoAsync[];
  loading: boolean;
}
