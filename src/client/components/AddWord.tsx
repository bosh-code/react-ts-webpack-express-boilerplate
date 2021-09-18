import React from 'react'
import { connect } from 'react-redux'
import { addWord } from '../actions'
import { ThunkDispatch } from 'redux-thunk'
import {Input} from "reactstrap";

// TODO: Is this dispatch type ok?
const submitWord = (event: React.KeyboardEvent<HTMLInputElement>, dispatch: ThunkDispatch<any, any, any>) => {
  if (event.keyCode === 13) {
    dispatch(addWord(event.currentTarget.value))
    event.currentTarget.value = ''
  }
}

const AddWord = (props: { dispatch: ThunkDispatch<any, any, any> }) => (
  <Input
    placeholder='Enter a word or phrase'
    onKeyUp={e => {
      submitWord(e, props.dispatch)
    }}
  />
)

export default connect()(AddWord)
