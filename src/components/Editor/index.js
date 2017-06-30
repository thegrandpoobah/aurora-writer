import { connect } from 'react-redux'
import React from 'react'
import Editor from './Editor'
import { loadContents, updateContents } from './actions'

class ConnectedEditor extends React.Component {
  componentWillMount() {
    this.props.loadContents()
  }

  render() {
    const { editor } = this.props

    if (editor.loaded) {
      return (<Editor contents={editor.contents} onChange={this.props.updateContents} />)
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    editor: state.editor
  }
}

const mapDispatchToProps = {
  loadContents,
  updateContents
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEditor)
export { default as reducer } from './reducers'
