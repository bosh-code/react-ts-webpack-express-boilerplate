import React from 'react'

const Word = ({ word }: { id: number, word: string }): React.ReactElement => (
  <li>{word}</li>
)

export default Word
