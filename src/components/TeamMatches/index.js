import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, matchDetails: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.idForColor = id
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = modifiedData
    const modifiedlatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const modifiedRecentMatches = recentMatches.map(obj => ({
      umpires: obj.umpires,
      result: obj.result,
      manOfTheMatch: obj.man_of_the_match,
      id: obj.id,
      date: obj.date,
      venue: obj.venue,
      competingTeam: obj.competing_team,
      competingTeamLogo: obj.competing_team_logo,
      firstInnings: obj.first_innings,
      secondInnings: obj.second_innings,
      matchStatus: obj.match_status,
    }))

    const processedData = {
      teamBannerUrl,
      latestMatchDetails: modifiedlatestMatchDetails,
      recentMatches: modifiedRecentMatches,
    }
    this.setState({isLoading: false, matchDetails: processedData})
  }

  render() {
    const {isLoading, matchDetails} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = matchDetails

    let backgroundColor = ''
    switch (this.idForColor) {
      case 'RCB':
        backgroundColor = 'red'
        break
      case 'KKR':
        backgroundColor = 'black'
        break
      case 'KXP':
        backgroundColor = 'light-red'
        break
      case 'CSK':
        backgroundColor = 'yellow'
        break
      case 'RR':
        backgroundColor = 'blue'
        break
      case 'MI':
        backgroundColor = 'type-blue'
        break
      case 'SH':
        backgroundColor = 'saffron'
        break
      case 'DC':
        backgroundColor = 'purple'
        break

      default:
        backgroundColor = ''
        break
    }

    const teamMatchCard = () => (
      <>
        <div className="team-card-content-container">
          <div className="banner-container">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
          </div>
          <ul className="top-list">
            <li className="latest-match-container">
              <LatestMatch recentMatch={latestMatchDetails} />
            </li>
            <li className="match-card-list-container">
              {recentMatches.map(obj => (
                <MatchCard matchDetails={obj} key={obj.id} />
              ))}
            </li>
          </ul>
        </div>
      </>
    )

    return (
      <div className={`tm-bg-container ${backgroundColor}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="white" height={50} width={50} />
          </div>
        ) : (
          teamMatchCard()
        )}
      </div>
    )
  }
}
export default TeamMatches
