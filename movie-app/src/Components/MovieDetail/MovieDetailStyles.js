import styled from 'styled-components'

export const MovieDetailStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 100px;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    position: relative;
    padding: 28px 32px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  }
  .back {
    width: 36px;
    height: 36px;
    position: absolute;
    left: -18px;
    top: -18px;
    background-color: #222;
    border-radius: 100%;
    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -6px 0 0 -6px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(135deg);
    }
    &:hover {
      box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
    }
  }
  .status {
    display: inline-block;
    padding: 6px 10px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    &.opened {
      background-color: #1D4CD8;
    }
    &.released {
      background-color: #aaa;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 30px;
    > small {
      font-weight: lighter;
      font-size: 14px;
      color: #999;
    }
  }
  section {
    position: relative;
    margin: 20px 0 0 0;
    padding-left: 20px;
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #222;
    }
    > strong {
      font-weight: bold;
      font-size: 18px;
      color: #1D4CD8;
    }
  }
  .desc {
    margin-top: 10px;
  }
  .info {
    dl {
      display: inline-block;
      font-size: 0;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      & +  dl {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #aaa;
      }
      dt,
      dd {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        letter-spacing: 0;
      }
      dt {
        font-weight: bold;
        color: #222;
      }
      dd {
        margin-left: 5px;
        color: #999;
      }
    }
    ul {
      display: inline-grid;
      grid-template-columns: repeat(8, 1fr);
      column-gap: 20px;
      row-gap: 20px;
    }
    li {
      > strong,
      > span {
        display: block;
      }
      strong {
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 16px;
      }
      span {
        color: #999;
        &.none {
          color: #e13632;
          text-decoration: line-through;
        }
      }
    }
  }
`