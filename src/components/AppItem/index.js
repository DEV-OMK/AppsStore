// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
