// async function fetchData() {
//     try {
//       const [todoResponse, postResponse] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/todos/1"),
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//       ]);
  
//       const todoData = await todoResponse.json();
//       const postData = await postResponse.json();
  
//       const combinedData = {
//         todo: todoData,
//         post: postData
//       };
  
//       console.log(combinedData);
//     } catch (error) {
//       console.log(error);
//     }
//   }

// fetchData()

async function multipleRequest(){
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
        const data1 = await response1.json()

        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data2 = await response2.json()

        const combinedData = {
            todo: data1,
            posts: data2
        }

        console.log(combinedData)
    } catch (error) {
        console.error(error)
    }
}

multipleRequest()