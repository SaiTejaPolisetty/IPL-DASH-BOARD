import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {isLoading: true, TeamList: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const modifiedObj = teams.map(obj => ({
      name: obj.name,
      id: obj.id,
      teamImageUrl: obj.team_image_url,
    }))
    this.setState({isLoading: false, TeamList: modifiedObj})
  }

  render() {
    const {isLoading, TeamList} = this.state

    const renderTeamCard = () => {
      const renderedCards = TeamList.map(obj => (
        <TeamCard cardDetails={obj} key={obj.id} />
      ))

      return renderedCards
    }

    return (
      <div className="home-bg">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="heading-img"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="white" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-card-container">{renderTeamCard()}</ul>
        )}
      </div>
    )
  }
}

export default Home
