import React, { Component } from 'react';

class LifeCycleDemo extends Component {

    state = {
        idx: 0
    };

    constructor(props) {
        super(props);
        console.log("in constructor");
    }

    // props의 값을 state 저장하기 위한 이벤트 함수
    // mount, update
    static getDerivedStateFromProps(nextPros, prevState) {
        console.log("in getDerivedStateFromProps");
        return null;
    }

    //component 생성 후 첫 번째 render() 호출한 다음
    componentDidMount() {
        console.log("in componentDidMount");
    }

    //props or state를 변경했을 때 component update 여부 결정
    shouldComponentUpdate(nextProps, nextState) {
        console.log("in shouldComponentUpdate ", nextState);
        if (nextState.idx < 5) {
            return true; //update 실행
        } else {
            return false; //update 취소
        }
    }

    //update 완료 후 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("in componentDidUpdate");
    }

    render() { 
        console.log("in render");
        const { idx } = this.state;     
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{ idx }</h1>
                <button 
                    onClick={ () => {
                        console.log("in onClick");
                        this.setState({ idx: idx + 1 })
                    } }>+</button>
                <button 
                    onClick={ () => {
                        console.log("in onClick");
                        if (this.state.idx === 0) return;                        
                        this.setState({ idx: idx - 1 })
                    } }>-</button>
            </div>
        );
    }

}

export default LifeCycleDemo;