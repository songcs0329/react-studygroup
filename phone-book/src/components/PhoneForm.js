import React, { Component, createRef } from 'react'

export default class PhoneForm extends Component {
    input = createRef()
    state = {
        name: '',
        phone: ''
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onCreate(this.state)
        this.setState({
            name: '',
            phone: ''
        })
        this.input.current.focus()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    name={"name"}
                    value={this.state.name}
                    onChange={this.handleChange}
                    ref={this.input}
                />
                <input
                    placeholder="전화번호"
                    name={"phone"}
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}
