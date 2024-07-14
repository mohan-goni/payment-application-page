import './index.css'

const DenominationItem = props => {
  const {eachItem, subAmount} = props
  const {value} = eachItem

  const onSubtract = () => {
    subAmount(value)
  }

  return (
    <li className="item-container">
      <button type="button" className="button" onClick={onSubtract}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
