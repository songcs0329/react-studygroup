import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-00001'
      },
      {
        id: 1,
        name: '김민준',
        phone: '010-0000-00002'
      },
      {
        id: 2,
        name: '송테스트',
        phone: '010-0000-00003'
      }
    ],
    keyword: "",
  }

  handlerChange = e => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = data => {
    const {information} = this.state
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    })
  }

  handleRemove = id => {
    const {information} = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state
    this.setState({
      information: information.map(
        info => {
          if(info.id === id) {
            return {
              id,
              ...data
            }
          }
          return info
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handlerChange}
          placeholder={"검색..."}
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
