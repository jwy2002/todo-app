import React from 'react';
import { connect } from 'react-redux';
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";
import {bindActionCreators} from "redux";

function CounterContainerD({ number, diff, increase, decrease, setDiff }) {
    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff
});

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// dispatch를 파리미터로 받아옵니다.
const mapDispatchToProps = (dispatch) =>
    //bindActionCreators를 사용하면, 자동으로 액션 생성 함수에 dispatch 가 감사진 상태로 호출할 수 있습니다.
    bindActionCreators(
        { increase, decrease, setDiff },
        dispatch
    );

// connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣어주세요.
export default connect(
    mapStateToProps, mapDispatchToProps
)(CounterContainerD);

/*
const enhance = connect(mapStateToProps, mapDispatchToProps);
export default enhance(CounterContainerD);
 */