import Link from 'next/link'
import Image from 'next/image'

const ProjItem = ({ building, mouseLeave, mouseEnter, onClick }) => {
  return (
    <div
      onClick={onClick}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      data-id={building.id}
      className='project-container'>
      <Image
        data-id={building.id}
        src={building.imgUrl}
        width={building.width}
        height={building.height}
        alt={building.name}
      />
    </div>
  )
}

export default ProjItem
