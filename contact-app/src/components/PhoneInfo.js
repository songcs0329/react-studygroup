import React, { Component } from 'react';

class PhoneInfo extends Component {

  state = {
    editing: false,
    name: "",
    phone: ""
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state !== nextState) return true
    return this.props.info !== nextProps.info
  }
  

  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const {info, onUpdate} = this.props;
    
    if(this.state.editing) {
      // true -> false
        // onupdate
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    } else {
      // false => true
      // state에 props.info값 넣기
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }
    this.setState({
      editing: !this.state.editing
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, phone} = this.props.info;
    const {editing} = this.state;
    console.log(name)
    
    const style = {
      border: '1px solid #000',
      padding: '8px',
      margin: '8px'
    };


    return (
      <div style={style}>
        {
          editing ? (
            <>
              <div>
                <input
                  name={"name"}
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div>
                <input
                  name={"phone"}
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
            </>
          ) : (
            <>
              <div><b>{name}</b></div>
              <div>{phone}</div>
            </>
          )
        }
        
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "적용" : "수정"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;