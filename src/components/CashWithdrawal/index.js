import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  subAmount = value => {
    console.log(typeof value)
    this.setState(prevState => {
      if (prevState.amount >= value) {
        return {amount: prevState.amount - value}
      }
      return prevState
    })
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah williams'
    const profileImage = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-img-container">
              <p className="profile-img">{profileImage}</p>
            </div>
            <p className="user-name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-item-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                subAmount={this.subAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
