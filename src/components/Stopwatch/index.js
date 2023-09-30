// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {sec: 0}

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({sec: 0})
  }

  renderminutes = () => {
    const {sec} = this.state
    const minutes = Math.floor(sec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {sec} = this.state
    const seconds = Math.floor(sec % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.increase, 1000)
  }

  increase = () => {
    this.setState(prevState => ({sec: prevState.sec + 1}))
  }

  render() {
    const result = `${this.renderminutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-cont">
        <div className="stopwatch-cont">
          <h1 className="heading">Stopwatch</h1>
          <div className="stop-div">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer-result">{result}</h1>
            <div className="btn-cont">
              <button
                type="button"
                className="start-btn"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
