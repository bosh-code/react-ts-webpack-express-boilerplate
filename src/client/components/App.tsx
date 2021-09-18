import React from 'react'
import Price from './Price'
import AddWord from './AddWord'
import Words from './Words'
import {Badge} from "reactstrap";

const App = (): React.ReactElement => {
  return (
    <>
      <div className="container">
        <h1 className='display-4'>TS &quot;Fullstack&quot; Boilerplate - with <em>crypto</em> and bootstrap</h1>
        <Price />
        <Words />
        <AddWord />
      </div>
    </>
  )
}

export default App
