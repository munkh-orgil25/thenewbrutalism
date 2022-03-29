const HoverTitle = ({ title }) => {
  return (
    <div className='title-wrapper'>
      <div className='title'>
        <h1>{title ? title : ''}</h1>
      </div>
    </div>
  )
}

export default HoverTitle
