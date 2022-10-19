import {Commit} from '../../interfaces/commit.interfaces'
import './Card.css'

export const Card = ({ sha, author, message, date }: Commit) => {
  return (
    <div className="Card">
      <div className="Card__title">
        <p>{message}</p>
      </div>
      <div className="Card__content">
        <p>
          <small>Author: {author}</small>
        </p>
        <p>
          <small>Published at: {date}</small>
        </p>
        <p>
          <small>
            <code>SHA: {sha}</code>
          </small>
        </p>
      </div>
    </div>
  )
}
