import React from 'react'

import photo1 from './mp01.webp'
import photo2 from './mp02.webp'
import photo3 from './mp03.webp'

export default function Architecture(){
  return(
    <>
        <div className="photos">
            <div className="photo1"><img src={photo1} alt="" /></div>
            <div className="photo2"><img src={photo2} alt="" /></div>
            <div className="photo3"><img src={photo3} alt="" /></div>
        </div>

    </>
  )
}
