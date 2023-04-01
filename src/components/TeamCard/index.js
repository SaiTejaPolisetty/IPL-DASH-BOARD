import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, id, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="card-item">
        <img src={teamImageUrl} alt={`${name}`} className="card-img" />
        <p className="card-title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
