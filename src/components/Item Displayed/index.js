import './index.css'

const ItemDisplayed = props => {
  const {details, historyList, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const clickDeleteButton = () => {
    const listOnDeletion = historyList.filter(each => each.id !== id)

    onDelete(listOnDeletion)
  }

  return (
    <li className="content">
      <div className="text-content">
        <p className="heading">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="heading">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={clickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ItemDisplayed
