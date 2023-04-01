import './index.css'

const LatestMatch = props => {
  const {recentMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = recentMatch

  const forRcbLogo =
    competingTeam === 'Royal Challengers Bangalore'
      ? 'for-rcb-competing-team-logo'
      : ''
  const forRcbPart2 =
    competingTeam === 'Royal Challengers Bangalore'
      ? 'for-rcb-match-details-part-2'
      : ''

  return (
    <div className="latest-match-container">
      <p className="card-caption">Latest Matches</p>
      <div className="latest-match-card">
        <div className="match-details-logo-container">
          <div className="match-details-part-1">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="competing-team-logo-sm">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo-sm"
            />
          </div>
        </div>
        <div className={`competing-team-logo ${forRcbLogo}`}>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <div className={`match-details-part-2 ${forRcbPart2}`}>
          <p className="innings-heading">First Innings</p>
          <p className="inning-details">{firstInnings}</p>

          <p className="innings-heading">Second Innings</p>
          <p className="inning-details">{secondInnings}</p>
          <p className="man-of-match-heading">Match Of The Match</p>
          <p className="inning-details">{manOfTheMatch}</p>
          <p className="innings-heading">Umpires</p>
          <p className="inning-details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
