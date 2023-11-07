import React from 'react'
import './popular.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img1 from '../img/pexels-pixabay-206359-min.jpg'
import img2 from '../img/pexels-errin-casano-2356045.jpg'
import img3 from '../img/pexels-luan-gonçalves-13911606.jpg'
import img4 from '../img/pexels-jorge-bilbao-4239487.jpg'
import img5 from '../img/pexels-mati-mango-12499889.jpg'
import img6 from '../img/pexels-stina-free-16274411.jpg'

const Data = [
  {
    id:1,
    imgSrc:img2,
    destTitle: 'Machu Pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX'
  },

  {
    id:2,
    imgSrc:img3,
    destTitle: 'Rio De Janeiro',
    location: 'Brasil',
    grade: 'CULTURAL RELAX'
  },

  {
    id:3,
    imgSrc:img4,
    destTitle: 'Mar del Plata',
    location: 'Argentina',
    grade: 'CULTURAL RELAX'
  },

  {
    id:4,
    imgSrc:img6,
    destTitle: 'Mendoza',
    location: 'Argentina',
    grade: 'CULTURAL RELAX'
  },
]

const Popular = () => {


  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade}) => {
              return (
                <div className="singleDestination">
                <div className="destImage">
    
    
                  <img src={imgSrc} alt="image title" />
    
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>
                      {location} 
                    </p>
    
                    <BsArrowRightShort className='icon'/>
    
                  </div>
                </div>
    
                <div className="destFooter">
                  <div className="number">
                    0{id}
                  </div>
    
                  <div className="destText flex">
                    <h6>
                      {location}
                    </h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className='icon'/>
                      </span>
                      Dot
                    </span>
                  </div>
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

export default Popular