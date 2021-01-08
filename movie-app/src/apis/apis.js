import axios from 'axios'
import { getToday } from '../constants/constants'

const API_KEY = '5e73ff3594cdc51745acdfcbbb5063a8'

export const getMovies = async date => {
    const targetDate = date ? date : getToday()
    console.log(targetDate)
    try {
        const response = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDate}`)
        return response.data
    } catch(e) {
        console.log(e)
        return e
    }
    
}