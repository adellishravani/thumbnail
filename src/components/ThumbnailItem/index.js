const ThumbNail = props => {
  const {thumbnails, changingImage} = props
  const {
    thumbnailUrl,

    thumbnailAltText,
    id,
  } = thumbnails

  const changeImage = () => {
    changingImage(id)
  }

  return (
    <li>
      <button onClick={changeImage} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbNail
