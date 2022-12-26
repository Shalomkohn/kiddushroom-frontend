import React from 'react'
import book from '../images/header-pictures/book-transparent.png'
import megilla from '../images/header-pictures/megilla.png'
import lightBulb from '../images/header-pictures/light-bulb-transparent.png'
import chai from '../images/header-pictures/chai.png'

function BackgroundDesign() {
  return (
    <div className="background-images">
        <img className='book' src={book} alt="" width={260}/>
        <img className='chai' src={chai} alt="" width={230}/>
        <img className='megilla' src={megilla} alt="" width={230}/>
        <img className='lightbulb' src={lightBulb} alt="" width={170}/>
    </div>
  )
}

export default BackgroundDesign