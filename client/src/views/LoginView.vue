
<template>
	<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
		<div class="bg-blue-100 dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
			<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Login</h1>
			<form @submit.prevent="submit">
				<div class="mb-4">
					<label for="email"
						class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
					<input v-model="email" type="email" id="email"
						class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="your@email.com" required>
				</div>
				<div class="mb-4">
					<label for="password"
						class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
					<input v-model="password" type="password" id="password"
						class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter your password" required>
				</div>
				<button type="submit"
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
	name: "LoginView",
	setup() {
		const email = ref('');
		const password = ref('');
		const router = useRouter();

		const submit = async () => {
			try {
				const response = await axios.post('http://localhost:5000/api/login', { email: email.value, password: password.value });
			
				console.log(response.data.token); 
				alert('Login successfull')
				
				// Assuming the token is returned in the response
				// Redirect to the appropriate route upon successful login
				router.push('/weather');
			} catch (error) {
				console.error('Error logging in:', error.message);
				// Handle errors here, such as displaying an error message to the user
			}
		}

		return {
			email,
			password,
			submit
		}
	}
}
</script>