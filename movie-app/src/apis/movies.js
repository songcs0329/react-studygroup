import axios from 'axios'

const API_KEY = '5e73ff3594cdc51745acdfcbbb5063a8'

export const getMoviesDay = async date => {
  const targetDate = date
  
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

export const getMovieDetail = async movieCode => {
  try {
    const response = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${movieCode}`)
    return response.data
  } catch(e) {
    console.log(e)
    return e
  }
}