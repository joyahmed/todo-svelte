<script>
	let todo = '';
	import { addTodo } from '../stores/todoStore';

	const handleSubmit = () => {
		addTodo(todo);
		todo = '';
		console.log('submitting');
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
		<input
			type="text"
			bind:value={todo}
			name="todo"
			placeholder="Watcha gotta do?"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus_border-gray-500 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 py-1.5 text-white text-xl">Submit</button
	>
</form>
