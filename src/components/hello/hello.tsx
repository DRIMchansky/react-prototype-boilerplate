import { useStore } from '@nanostores/react'

import { $counter, increaseCounter } from '../../app/store/counter'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './hello.css'

function Hello() {
  const counter = useStore($counter)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increaseCounter}>count is {counter}</button>
        <p>
          Edit <code>src/components/hello/hello.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default Hello