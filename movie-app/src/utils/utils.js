export const getLatest = () => {
  let today = new Date()
  let year = today.getFullYear() // 년
  let month = ("0" + (1 + today.getMonth())).slice(-2) // 월
  let day = ("0" + (today.getDate() - 1)).slice(-2) // 일

  return year + month + day
}

export const changeDate = date => date.replace(/(\d{4})(\d{2})(\d{2})/, '$1년 $2월 $3일')

export const comma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")