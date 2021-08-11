import React from 'react'
import {connect} from 'react-redux'
import {addWord} from '../actions'
import {ThunkDispatch} from 'redux-thunk'

// TODO: Is this dispatch type ok?
const submitWord = (event: React.KeyboardEvent<HTMLInputElement>, dispatch: ThunkDispatch<any, any, any>) => {
    if (event.keyCode === 13) {
        dispatch(addWord(event.currentTarget.value))
        event.currentTarget.value = ''
    }
}

const AddWord = (props: { dispatch: ThunkDispatch<any, any, any> }) => (
    <div className="md:w-2/3">
        <input
            className="rounded-xl m-3 bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder='Enter a word or phrase'
            onKeyUp={e => {
                submitWord(e, props.dispatch)
            }}
        />
    </div>
)

export default connect()(AddWord)
