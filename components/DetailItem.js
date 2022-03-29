import Image from 'next/image'

const DetailItem = ({ detail, type }) => {
  const detailLength = detail.length
  if (type === 'img') {
    return (
      <div className='embla__slide'>
        <div className='focused-container'>
          <Image src={detail.imgUrl} width={detail.width} height={detail.height} alt={detail.alt} />
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className='embla__slide'>
          <div className='focused-container'>
            <p>{detail.text}</p>
          </div>
        </div>
      </>
    )
  }
}

export default DetailItem
