import styled from 'styled-components'

export const MoviesSearchStyles = styled.div`
  width: 80%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  .submit_btn {
    width: 60px;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background-color: #009b77;
  }
  .insert {
    width: calc(100% - 60px);
    font-size: 0;
  }
`