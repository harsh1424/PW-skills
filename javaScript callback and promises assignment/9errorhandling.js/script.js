async function fetchData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789")
        if (!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        const errorMessage = document.createElement('p')
        errorMessage.innerText = error
        document.body.appendChild(errorMessage)
    }
}

document.getElementById("btn").addEventListener("click", fetchData)