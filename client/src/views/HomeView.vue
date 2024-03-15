<template>
  <ul class="flex">
  <li class="flex-1 mr-2">
    <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/register">Home</a>
  </li>
  <li class="flex-1 mr-2">
    <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/login">Login</a>
  </li>
  <li class="text-center flex-1">
    <a class="block py-2 px-4 text-blue-400 " href="/register">Register</a>
  </li>
</ul>

  <!-- <div class="home">
    <h2 class="text-2xl font-semibold m-10 "> Welcome</h2>
    <div class="flex space-x-5 ">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      
{{ message }}
    </div> -->
    
  
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import {onMounted} from 'vue'
export default {
  name: 'HomeView',
  setup(){


    onMounted(async()=>{
      await fetch('http://localhost:5000/api/user',{
				method:'POST',
				headers:{'Content-Type': 'application/json'},
				credentails:'include',
				
			});
     

    })
    
  }
  
  
}
</script>
