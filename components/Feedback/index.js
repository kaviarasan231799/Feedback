import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="container">
        <div className="inside-container">
          <h1 className="heading">
            How Satisfied are you with our customer support performance?
          </h1>
          <ul className="order-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-container">
        <img src={loveEmojiUrl} alt="love emoji" className="imgLove" />
        <h1 className="thankyou">Thank You!</h1>
        <p className="paraThankyou">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div>
        <div>
          {isFeedbackSelected ? this.renderThankyou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
