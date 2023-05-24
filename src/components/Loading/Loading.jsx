import React from 'react'
import './Loading.css'
import ImgLoad from '../../assets/images/load.gif'

const Loading = () => {
  return (
    <div className='loading'>
        <div className='img-load'>
        <img src={ImgLoad} alt="Carregando" />
        </div>
    </div>
  )
}

export default Loading