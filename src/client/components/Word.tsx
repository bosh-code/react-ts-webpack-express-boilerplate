import React from 'react'

const Word = ({ word }: { id: number, word: string }): React.ReactElement => (
  <div className="block text-gray-500 font-bold mb-1 md:mb-0 px-4">{word}</div>
)

export default Word
