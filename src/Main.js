import React from 'react'

function Main() {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p> YOUR FEET DESERVE THE BEST AND WE’RE 
                HERE TO HELP YOU WITH OUR SHOES.YOUR FEET 
                DESERVE THE BEST AND WE’RE HERE TO 
                HELP YOU WITH OUR SHOES. </p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className=''>
                <p>Also Available On</p>
            </div>
            <div className='icons'>
                <img src='/amazon.png'/>
                <img src='/flipkart.png'/>
            </div>
        </div>
        <div className='hero-image'>
            <img src='/hero-image.png'/>
        </div>
    </div>
  )
}

export default Main