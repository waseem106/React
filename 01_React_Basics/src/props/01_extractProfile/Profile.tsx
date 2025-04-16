import { getImageUrl } from './utlis'

function Profile({heading="Heading",profession="Profession",awards="Awards",discovered="Discovered",children}) {
  return (
    <div className='border-2 p-9 bg-gray-100'>
        {children}
       <h2>{heading}</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: 2 </b> 
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
    </div>
  )
}

export default Profile
