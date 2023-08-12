import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const resultSuggestions = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
          <div className="bar-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon-decor"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="bar-decor"
              onChange={this.onInputChange}
              value={searchInput}
            />
          </div>
          <div className="each-item-div">
            <ul className="each-item-li">
              {resultSuggestions.map(each => (
                <SuggestionItem
                  suggestions={each}
                  key={each.id}
                  onArrowClick={this.onArrowClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
