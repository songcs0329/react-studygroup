import React, { Component } from 'react'

export default class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.id)
    }
    handleToggleEdit = () => {
        const {editing} = this.state
        this.setState({editing: !editing})
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const {info, onUpdate} = this.props
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        if(prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    render() {
        const style = {
            border: '1px solid #000',
            padding: '8px',
            margin: '8px'
        }
        
        const {editing} = this.state
        const {name, phone} = this.props.info

        if(editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            placeholder="이름"
                            name={"name"}
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="전화번호"
                            name={"phone"}
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}
