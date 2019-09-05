export interface TodoRequest {
  id: number;
  text: string;
  completed: boolean;
}
const todos: TodoRequest[] = [
  { id: 1, text: "foo", completed: true },
  { id: 2, text: "bar", completed: false },
  { id: 3, text: "baz", completed: true }
];
export const fetch = () => {
  return new Promise<TodoRequest[]>(resolve => {
    setTimeout(() => {
      return resolve(todos);
    }, 1000);
  });
};
