// 리덕스와 연동된 컨테이너 컴포넌트(동작) 작성
import React, { Component } from 'react'
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as counterActions from 'store/modules/counter'

class CounterContainer extends Component {
    handleIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    }
    handleDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    }


    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;

        return (
            <Counter
                number={number}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        )
    }
}

// props 값으로 넣어 줄 상태를 정의해줍니다.
// initialState 가져옴
// const mapStateToProps = (state) => ({
//     number: state.counter.number
// });

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
// dispatch = 액션생성함수들 가져옴
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(counterActions.increment()),
//     decrement: () => dispatch(counterActions.decrement())
// })

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// export default connect((state) => ({ //mapStateToProps
//     number: state.counter.number
// }), (dispatch) => ({ //mapDispatchToProps
//         increment: () => dispatch(counterActions.increment()),
//         decrement: () => dispatch(counterActions.decrement())
// }))(CounterContainer);

export default connect(
    (state) => ({ //mapStateToProps = state값 정의
        number: state.counter.number
    }),
    (dispatch) => ({ // dispatch = 액션함수들 가져옴 createAction...
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(CounterContainer);