import Image from 'next/image'

const Info = ({ toggleInfo }) => {
  return (
    <div className='about-wrapper'>
      <div className='about'>
        <div onClick={toggleInfo} className='header-wrapper'>
          <span>
            <Image src='/img/close.svg' alt='close' width={16} height={16} />
          </span>
          <h2>Info</h2>
        </div>
        <div className='content'>
          <p>
            {
              'The New Brutalism\' is an experimental website inspired from an article from 1955, \'The New Brutalism\', by Reyner Banham. This is my own personal experimentation with draggable map overlay which translates to the second idea of "brutalist" structure - "Clear exhibition of structure".'
            }
          </p>
          <p>
            {
              'This website includes brief information, pictures about 11 structures from all around the world which influences and resembles the brutalist movement the most.'
            }
          </p>
          <p>
            {
              'The website design was my own interpretation of brutalist structure into web application. It might be misunderstood as a minimalist approach, but in essence, the brutalism was about efficiency, valuation of raw materials. Brutalism is often seen as an anti-design but it is instead form of expression of raw and brutally honest design.'
            }
          </p>
          <Image width={1024} height={635} src='/img/info.jpg' alt='newbrut' />
          <p>Design, Code by Munkh-Orgil</p>
        </div>
      </div>
    </div>
  )
}

export default Info
