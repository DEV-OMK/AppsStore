// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active' : ''

  const tabClick = () => {
    updateActiveTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={tabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
