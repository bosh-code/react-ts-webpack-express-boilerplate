import React from 'react'
import { connect } from 'react-redux'

import Word from './Word'
import List from "reactstrap/es/List";

interface IWord {
  id: number,
  word: string
}

const Words = ({ words }: { words: IWord[] }): React.ReactElement => {
  return (
    <List>
      {words.map((word: IWord) =>
        <Word key={word.id}
              {...word}
        />
      )}
    </List>
  )
}

const mapStateToProps = (state: { words: IWord[] }) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Words)
