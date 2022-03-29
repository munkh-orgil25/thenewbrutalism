import { buildings } from '../data'
import ListItem from './ListItem'
import Image from 'next/image'

const Index = ({ toggleIndex }) => {
  return (
    <div className='index-wrapper'>
      <div className='header-wrapper'>
        <h2 onClick={toggleIndex}>Index</h2>
        <span>
          <Image onClick={toggleIndex} src='/img/close.svg' height={16} width={16} alt='close' />
        </span>
      </div>
      <div className='table-container'>
        {buildings.map((building) => (
          <ListItem key={building.id} building={building} toggleIndex={toggleIndex} />
        ))}
      </div>
    </div>
  )
}

export default Index
