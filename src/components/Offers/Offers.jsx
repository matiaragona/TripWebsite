import React from 'react'
import './offers.css'

import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import img10 from '../img/pexels-carlos-oliva-3586966.jpg'
import img11 from '../img/pexels-antonio-cuellar-4366062.jpg'
import img12 from '../img/pexels-gotta-be-worth-it-919291.jpg'


const Offer = [
  {
    id:1,
    imgSrc: img10,
    destTitle: 'Nueva York',
    location: 'Estados Unidos',
    price: '$12500'
  },

  {
    id:2,
    imgSrc: img11,
    destTitle: 'Miami',
    location: 'Estados Unidos',
    price: '$12590'
  },

  {
    id:3,
    imgSrc: img12,
    destTitle: 'Madrid',
    location: 'España',
    price: '$14900'
  },
]
const Offers = () => {
  return (
    <section className='offers container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">

          {
  Offer.map((offer) => {
    const { id, imgSrc, destTitle, location, price } = offer;
    return (
      <div className="singleOffer" key={id}>
        <div className='destImage'> 
          <img src={imgSrc} alt="Image Name" />
          <span className='discount'>
            30% Off
          </span>
        </div>
        <div className="offerBody">
                <div className="price flex">
                    <h4>
                        {price}
                    </h4>
                    <span className='status'>
                        For Rent
                    </span>
                </div>

            <div className="amenities flex">
            
              <div className="sigleAmenity flex">
                <MdKingBed className = 'icon'/>
                <small>2 Beds</small>
              </div>
              
              <div className="sigleAmenity flex">
                <MdBathtub className = 'icon'/>
                <small>1 Bath</small>
              </div>
              
              <div className="sigleAmenity flex">
                <FaWifi className = 'icon'/>
                <small>Wi-fi</small>
              </div>
              
              <div className="sigleAmenity flex">
                <MdAirportShuttle className = 'icon'/>
                <small>Shuttle</small>
              </div>
            </div>

            <div className="location">
              <MdLocationOn className='icon'/>
              <small>450 Vine #310, {location}</small>
            </div>

            <button className='btn flex'>
              View Details
              <BsArrowRightShort className='icon'/>
            </button>
          </div>

          </div>
              )
            })
          }

      </div>
  



          
        </div>
    </section>
  )
}

export default Offers