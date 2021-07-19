import { AnyAction } from 'redux'

const words = (state: any[] = [], action: AnyAction) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]

    default:
      return state
  }
}

export default words
