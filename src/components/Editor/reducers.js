import { LOAD_CONTENTS, UPDATE_CONTENTS } from './action-types'

const defaultState = {
  loaded: false,
  contents: ''
}

const editor = (state = defaultState, action) => {
  switch(action.type) {
    case LOAD_CONTENTS:
      return {
        loaded: true,
        contents: action.payload
      }
    case UPDATE_CONTENTS:
      return {
        ...state,
        contents: action.payload
      }
    default:
      return state
  }
}

export default editor
