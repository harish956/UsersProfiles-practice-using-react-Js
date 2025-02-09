import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {imgUrl, name, role} = UserDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} alt="img" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
