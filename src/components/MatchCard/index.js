import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  /* `competing team ${competing_team}` */
  const matchStatusColor = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <div className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`won-or-lost ${matchStatusColor}`}>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
