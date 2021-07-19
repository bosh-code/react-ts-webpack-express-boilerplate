import React from 'react'
import { connect } from 'react-redux'

import Word from './Word'

interface IWord {
  id: number,
  word: string
}

const Words = ({ words }: { words: IWord[] }): React.ReactElement => {
  return (
    <div>
      {words.map((word: IWord) =>
        <Word key={word.id}
              {...word}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state: { words: IWord[] }) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Words)
