import React from 'react'
import './Video.css'
import video from '../assets/video1.mp4'

function Video() {
  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        src={video}
      >
      </video>
    </div>
  )
}

export default Video
