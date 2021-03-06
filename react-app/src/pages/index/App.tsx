import React from 'react';
import './App.css';

type IState = {
  date: Date
}

export default class Clock extends React.Component<{}, IState> {
  timerID: any
  state: IState = {
    date: new Date()
  }
  // constructor (props: {}) {
  //   super(props)
  //   // this.state = {date: new Date()}
  // }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  // 18FC7D2FD6EF1281
  // 32EF2CC579ED40F4
  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }
  render () {
    return (
      <div>
        <h1>hello react</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}


