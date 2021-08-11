import React from 'react'
import Price from './Price'
import AddWord from './AddWord'
import Words from './Words'

const App = (): React.ReactElement => {
    return (
        <>
            <div className="app">
                <h1 className="text-purple-400 dark:text-red-500 text-3xl">TS &quot;Fullstack&quot; Boilerplate - with <em>crypto</em> and
                    tailwindcss</h1>
                <Price/>
                <Words/>
                <AddWord/>
            </div>
            <div className='m-6'>
                <code>this is a code block</code>
            </div>
        </>
    )
}

export default App
