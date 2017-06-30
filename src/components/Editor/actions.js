import { LOAD_CONTENTS, UPDATE_CONTENTS } from './action-types'
import { loadContents as loadEditorContents, updateContents as updateFileContents } from '../../ipc'

export const loadContents = (filename) => (dispatch) => {
  return loadEditorContents({
    filename: '/tmp/winter/contents/index.md'
  }).then((response) => {
    return dispatch({type: LOAD_CONTENTS, payload: response})
  })
}

export const updateContents = (contents) => (dispatch) => {
  console.log('bitches')

  updateFileContents({
    filename: '/tmp/winter/contents/index.md',
    contents
  }).then((response) => {
    return dispatch({
      type: UPDATE_CONTENTS,
      payload: contents
    })
  })
}
