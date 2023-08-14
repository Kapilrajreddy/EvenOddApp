// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state
    const isEven = number % 2 === 0 ? 'Even' : 'Odd'
    const isOdd =
      number % 2 === 0
        ? 'even-odd-app-sub-container'
        : 'even-odd-app-sub-container-2'
    return (
      <div className="even-odd-app-container">
        <div className={isOdd}>
          <h1 className="even-odd-app-main-heading">Count {number}</h1>
          <p className="even-odd-app-sub-heading">Count is {isEven}</p>
          <button
            type="button"
            className="even-odd-app-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="even-odd-desc">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

/*
    import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {displayText}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
*/
