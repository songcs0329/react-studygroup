export const getToday = () => {
  let today = new Date()
  let year = today.getFullYear() // 년
  let month = ("0" + (1 + today.getMonth())).slice(-2) // 월
  let day = ("0" + (today.getDate() - 1)).slice(-2) // 일

  return year + month + day
}

const NOTHING =  name => {
  return `${name}가 존재하지 않습니다.` // 조회결과 없을 때
}

const SEARCH_OPTS = {
  LBLS: `날짜를 입력해주세요.(ex. ${getToday()})`,
  SMALL: `금일 전날까지 조회 가능`,
  NAME: "date",
  TYPE: "text"
}