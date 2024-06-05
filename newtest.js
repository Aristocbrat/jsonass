let newDiv = document.createElement("ol")
document.body.append(newDiv)
newDiv.textContent="Another json content"
newDiv.style.backgroundColor="green"
newDiv.style.color="white"



fetch("https://jsonplaceholder.typicode.com/comments")
.then(response=>{
    return response.json()
})
.then(comments=>{
   const getDiv = document.getElementsByTagName("ol")
   let divBody = document.querySelector("ol")
   comments.map(comment=>{
    divBody.innerHTML+=`<li>${comment.body}</li>, <li>${comment.email}</li>`
    divBody.addEventListener('mousedown',()=>{
        open("https://www.bbc.com","bbc")
    })
   })
})
.catch(error=>{
    console.log(error)
})