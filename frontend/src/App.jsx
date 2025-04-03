import { useState } from 'react'

const apiUrl = import.meta.env.VITE_API_URL;
function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json().then((data) => setMessage(data.message)))
  })

  return (
    <>
      <h1>MERN-base-2</h1>
      <div className="card">
        <h1>{message}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Так можно написать кусок кода <code>this is very important code</code> 
        </p>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder='поле, которое ничего не делает'/>
        <input type="submit" value="Кнопка" />
      </form>
    </>
  )
}

export default App
