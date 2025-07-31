import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import IPLPointsTable from './IPLPointsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IPLPointsTable />
    </>
  )
}

export default App
