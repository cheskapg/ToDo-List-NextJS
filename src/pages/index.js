import Navbar from "../components/Navbar";

export default function Home() {
  
  const todos = [
    { title: 'Todo 1', description: 'Todo 1 description'},
    { title: 'Todo 2', description: 'Todo 2 description'},
    { title: 'Todo 3', description: 'Todo 2 description'},
  ]
  
  return (

    <div>
      <Navbar />
      <ul>
        {todos.map((data, index) => {
          return(
            <li className="text-lg font-bold" 
              key={index}>
                Title: {data.title} &nbsp; Description: 
                {data.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
