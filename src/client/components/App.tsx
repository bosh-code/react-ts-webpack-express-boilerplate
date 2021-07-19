import React from 'react'
import Price from './Price'
import AddWord from './AddWord'
import Words from './Words'

const App = (): React.ReactElement => {
  return (
    <>
      <div className="app">
        <h1>TS &quot;Fullstack&quot; Boilerplate - with <em>crypto</em></h1>
        <Price />
        <Words />
        <AddWord />
      </div>
    </>
  )
}

export default App
