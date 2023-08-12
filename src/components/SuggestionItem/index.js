import './index.css'

const SuggestionItem = props => {
  const {suggestions, onArrowClick} = props
  const {suggestion} = suggestions

  const onArrow = () => {
    onArrowClick(suggestion)
  }

  return (
    <div className="each-suggestion-div">
      <li>
        <p className="li-item" value={suggestion}>
          {suggestion}
        </p>
      </li>
      <button type="button" className="arrow-btn" onClick={onArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </div>
  )
}

export default SuggestionItem
