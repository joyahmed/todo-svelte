import { writable } from 'svelte/store';

interface Todo {
	text: string;
	completed: boolean;
	id: number;
}

export const todos = writable<Todo[]>([]);

export const addTodo = (text: string) => {
	todos.update((currentTodos: Todo[]) => {
		const newTodo: Todo = { text, completed: false, id: Date.now() };
		const newTodos = [...currentTodos, newTodo];
		return newTodos;
	});
};

export const deleteTodo = (id: number) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id: number) => {
  todos.update((todos: Todo[]) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        completed: !updatedTodos[index].completed,
      };
      return updatedTodos;
    }
    return todos;
  });
};
