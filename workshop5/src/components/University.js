import React from 'react';
import routes from '../constants/Routes';
import {useNavigate} from 'react-router-dom';



const University = ({data}) => {
  const navigate = useNavigate();

  return (
    <div className='oneUni'>
  
      <h1>{data.alpha_two_code}</h1>
      <h2>{data.country}</h2>
      <h4>{data.name}</h4>
      
      <button onClick={()=>{
        navigate(`${routes.detailsPage}  ${data.name}`)
      }} className='oneUniButton'>
        more details...
        </button>

    </div>
  )
}

export default University;