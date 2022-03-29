import { server } from '../../../config'
import HoverTitle from '../../../components/HoverTitle'
import DetailItem from '../../../components/DetailItem'
import useEmblaCarousel from 'embla-carousel-react'

const Project = ({ building }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true })
  return (
    <>
      <div className='detail-container'>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {building.details.map((detail) => (
              <DetailItem key={detail.order} detail={detail} type={detail.type} />
            ))}
          </div>
        </div>
      </div>
      <HoverTitle title={building.name} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/buildings/${context.params.id}`)
  const building = await res.json()

  return {
    props: {
      building,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/buildings/`)
  const buildings = await res.json()

  const ids = buildings.map((building) => building.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Project
