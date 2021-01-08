import styled from 'styled-components'

export const MoviesItemStyles = styled.li`
  display: flex;
  position: relative;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  &:first-child {
    margin-top: 0;
  }
  label {
    display: flex;
    width: 26px;
    height: 26px;
    position: absolute;
    left: -13px;
    top: -13px;
    border-radius: 100%;
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    &.old {
      background-color: #222;
    }
    &.new {
      background-color: #1D4CD8;
    }
  }
  .item_info {
    font-size: 16px;
    strong {
      display: inline-block;
      padding-right: 10px;
      margin-bottom: 4px;
      position: relative;
      font-weight: bold;
      font-size: 18px;
      z-index: 1;
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgb(29,76,216,0.4);
        z-index: -1;
      }
    }
  }
  .item_rate {
    text-align: right;
    &.up {
      color: #f5002b;
      .per {
        &:after {
          content: '▲'
        }
      }
    }
    &.down {
      color: #006df5;
      .per {
        &:after {
          content: '▼'
        }
      }
    }
    > span {
      display: block;
      & + span {
        margin-top: 10px;
      }
      .per {
        margin-left: 6px;
        font-weight: bold;
        &:after {
          content: '';
          margin-left: 4px;
        }
      }
    }
  }
`