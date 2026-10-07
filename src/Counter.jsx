import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <p>You clicked {count} times</p>
      {/* Using the callback form (c) => c + 1 as requested */}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter