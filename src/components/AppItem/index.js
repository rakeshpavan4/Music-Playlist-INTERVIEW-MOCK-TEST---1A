import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const AppItem = props => {
  const {item, deleteSong} = props
  const {id, name, imageUrl, genre, duration} = item

  const deleteClicked = () => {
    deleteSong(id)
  }

  return (
    <li className="list">
      <div className="item-container">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="time">
        <p>{duration}</p>
        <button
          type="button"
          onClick={deleteClicked}
          data-testid="delete"
          className="button"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default AppItem
