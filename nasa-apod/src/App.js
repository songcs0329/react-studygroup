import React, { Component } from 'react'
import ViewerTemplate from './components/ViewerTemplate/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator/SpaceNavigator';
import Viewewr from './components/Viewer';
import moment from 'moment';
import * as api from './lib/api';


class App extends Component {
  // api state값 설정
  state = {
    loading: false,
    maxDate: null,
    date: null,
    urL: null,
    mediaType: null,
  }

  // axios로 api 불러서 state 재설정
  getAPOD = async (date) => { //함수선언 앞에 async
    if (this.state.loading) return; // 이미 요청중일땐 무시
    this.setState({
      loading: true
    });

    try {
      // 정상동작
      const response = await api.getAPOD(date); // promise 앞에 await
      // 비구조화할당 + 새로운이름
      const { date: retrieveDate, url, media_type: mediaType } = response.data;

      // console.log('date = ', retrieveDate);
      // console.log('url = ', url);
      // console.log('mediaType = ', mediaType);

      if(!this.state.maxDate) {
        // maxDate가 없으면 지금받은 date로 설정
        this.setState({
          maxDate: retrieveDate
        })
      }

      // 전달받은 데이터 넣기
      this.setState({
        date: retrieveDate,
        mediaType,
        url
      });
      
    } catch (e) {
      // 에러
      console.log(e)
    }

    this.setState({ // axios로 api요청한 뒤 loading false
      loading: false
    })
  }

  handlePrev = () => {
    const { date } = this.state;

    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log('prevDate', prevDate);
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if (date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log('nextDate', nextDate);
    this.getAPOD(nextDate);
  }

  componentDidMount() { // 컴포넌트 랜더링 후 api 호출
    this.getAPOD();
  }


  render() {
    const {url, mediaType, loading } = this.state
    const { handlePrev, handleNext } = this;
    
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext}/>}
        viewer={(
          // api로 호출
          <Viewewr
            url={url}
            mediaType={mediaType}
            loading={loading}
          />
        )}
      />
    )
  }
}

export default  App;
