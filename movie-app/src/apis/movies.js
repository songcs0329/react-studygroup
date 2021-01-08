import axios from 'axios'

export const getLatest = () => {
  let today = new Date()
  let year = today.getFullYear() // 년
  let month = ("0" + (1 + today.getMonth())).slice(-2) // 월
  let day = ("0" + (today.getDate() - 1)).slice(-2) // 일

  return year + month + day
}

const API_KEY = '5e73ff3594cdc51745acdfcbbb5063a8'

export const getMoviesDay = async date => {
  const targetDate = date ? date : getLatest()
  
  try {
    const response = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDate}`)
    return response.data
  } catch(e) {
    console.log(e)
    return e
  }
}

export const getMoviesWeek = async date => {
  const targetDate = date
  
  try {
    const response = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDate}&weekGb=0`)
    return response.data
  } catch(e) {
    console.log(e)
    return e
  }
}