import React from 'react'
import './styles.css'
import HouseData from './data'

const Card = () => {
  return (
    <div className='main-container'>
        {HouseData.map((card) => ( 
        <div className='card'>
            <div className='card-media'>
            <img 
                src={card.houseImg}
                alt='property demo'
                className='card-image'
            />
                <div className='action-buttons'>
                    <button className='actionButton1'>For Rent</button>
                    <button className='actionButton2'>V</button>
                </div>
            </div>
            <div className='street'>
                <h4 style={{marginTop: 0, marginBottom: '10px'}}>
                    {card.streetName}
                </h4>
            </div>
            <div className='address'>
                <h3>
                    {card.address}
                </h3>
            </div>
            <div className='features'>
                <p>{card.features[0].rooms}</p>
                <p>{card.features[0].bed}</p>
                <p>{card.features[0].bath}</p>
                <p>{card.features[0].space}</p>
            </div>
            <div className='footer'>
                <p>
                    <span className='card-text'>{card.rent}</span>/month
                </p>
                <button className='actionButton3'>Read More</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Card