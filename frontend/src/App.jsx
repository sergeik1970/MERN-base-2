import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MERN-base-2</h1>
      <div className="card">
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
