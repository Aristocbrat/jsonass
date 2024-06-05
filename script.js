
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    return response.json();
  })
  .then(todos => {
  
    const todoOrigin = document.getElementById('todoOrigin');

    todos.forEach(todo => {
      // Create a div element for each to-do item
      const todoDiv = document.createElement('div');
      // Set the text content of the div
      todoDiv.textContent = `Id: ${todo.id},
      userId:${todo.userId}
       Title: ${todo.title},
        Completed: ${todo.completed}`;
      // set your conditions and assign them to the appropriate class
      if (todo.completed) {
        todoDiv.classList.add('t-item', 'completed');
      } else {
        todoDiv.classList.add('t-item', 'uncompleted');
      }
      // open new blank page ,
      todoDiv.addEventListener('click', () => {
        window.open(`https://jsonplaceholder.typicode.com/todos/${todo.id},${todo.title},${todo.userId},${todo.completed}`, 'newpage',"width=500,height=500");
        alert("welcome to my new page")
      });
      todoOrigin.appendChild(todoDiv);
    });
  }) 
  .catch(error => {
    console.log( error);
  });

