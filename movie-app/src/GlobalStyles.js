import styled, { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  a{
    text-decoration:none;
    color:inherit;
    outline: 0;
  }
  *{
    box-sizing:border-box;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video{margin:0;padding:0;border:0}
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color: #EFEFEF;
    color: #222;
    letter-spacing: -1px;
    line-height: 1.2;
  }
  a{text-decoration:none;color:inherit}
  abbr[title]{border-bottom:none;text-decoration:underline}
  pre{font-family:"Noto Sans KR", "Apple SD Gothic Neo", sans-serif;white-space:pre-line}
  strong{font-weight:500}
  sub, sup{position:relative;font-size:.075rem}
  sub{bottom:-.025rem}
  sup{top:-.05rem}
  ol, ul{list-style:none}
  table{border-collapse:collapse;border-spacing:0}
  img{max-width:100%;border:0}
  legend{max-width:100%;white-space:normal;color:inherit}
  button, input, optgroup, select, textarea{
    -webkit-appearance:none;appearance:none;
    margin:0;padding:0;background-color:transparent;border-radius:0;border:0;outline:0;
    font-family:inherit;font-size:inherit;letter-spacing:inherit;line-height:inherit
  }
  input {
    ::placeholder {
    color: #777;
    font-size: 14px;
  }
  }
  button, select{text-transform:none}
  select{background-color:transparent}
  button, a{cursor:pointer}
  textarea{overflow:auto}
  :focus{outline:none}
  .select,
  .ip {
    display: inline-block;
    font-size: 0;
    input,
    select {
      width: 100%;
      height: 100%;
      padding: 8px;
      font-size: 16px;
      background-color: #fff;
    }
  }
  .select {
    width: 60px;
    position: relative;
    &:after {
      content: '▼';
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 8px;
    }
    & + .ip {
      width: calc(100% - 72px);
      margin: 0 6px;
    }
  }
  .ip {
    input {
      padding: 7px 8px;
    }
  }
  .hide {
    overflow: hidden;
    display: block;
    width: 0;
    height: 0;
    font-size: 0;
    clip: clip(-1px, -1px, -1px, -1px);
    position: absolute;
    left: -9999px;
  }
`
const loadingSpin = keyframes`
  0%{-webkit-transform:rotate(0deg)}
  50%{-webkit-transform:rotate(180deg)}
  100%{-webkit-transform:rotate(360deg)}
`

export const LoadingPop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
  }
  .loading-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    margin-top: -15px;
    border-radius: 100%;
    background: transparent;
    border: 0 solid #fff;
    border-width: 2px;
    border-bottom-color: transparent;
    animation: ${loadingSpin} .75s linear infinite;
  }
`

export const ErrorMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  > strong {
    font-weight: bold;
  }
`