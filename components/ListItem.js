import Link from 'next/link'

const ListItem = ({ building, toggleIndex }) => {
  return (
    <Link href={`/projects/${building.id}`} passHref>
      <div onClick={toggleIndex} className='index-item'>
        <h3>{building.name}</h3>
        <span>{building.city}</span>
      </div>
    </Link>
  )
}

export default ListItem
