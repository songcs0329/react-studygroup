import { useRef, useState } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {
  const useId = useRef(3);
  const initialState = [
    {
      id: 0,
      name: '송창석',
      phone: '010-0000-0001'
    },
    {
      id: 1,
      name: '홍길동',
      phone: '010-0001-0002'
    },
    {
      id: 2,
      name: '송동석',
      phone: '010-0002-0003'
    }
  ]
  
  const [infomation, setInfomation] = useState(initialState)
  const [keyword, setKeyword] = useState('')

  const handleCreate = data => setInfomation(infomation.concat({id: useId.current++, ...data}))
  const handleRemove = id => setInfomation(infomation.filter(info => info.id !== id))
  const handleUpdate = (id, data) => {
    setInfomation(infomation.map(info => {
      return info.id === id
      ? {
        ...info,
        ...data
      } : info
    }))
  }
  const handleChange = e => setKeyword(e.target.value)
  const filteredList = infomation.filter(info => {
    return info.name.indexOf(keyword) !== -1 && info
  })
  
  return (
    <>
      <PhoneForm
        onCreate={handleCreate}
      />
      <p>
        <input
          placeholder={"검색 할 이름을 입력하세요..."}
          value={keyword}
          onChange={handleChange}
        />
      </p>
      <hr/>
      <PhoneInfoList
        data={filteredList}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
