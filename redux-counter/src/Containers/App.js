import React, { Component } from 'react'
import Buttons from '../Components/Buttons'
import * as actions from '../actions'
import { getRandomColor } from '../utils'
import { connect } from 'react-redux'
import CounterListContainer from './CounterListContainer'

class App extends Component {
    render() {
        const {onCreate, onRemove} = this.props
        return (
            <div className={"App"}>
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
})

export default connect(null, mapDispatchToProps)(App)