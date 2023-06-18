import React, { useRef, useState } from 'react'
import './Video.css'
import video from '../assets/video1.mp4'

function Video() {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  function handleStart() {
    if (play) {
      videoRef.current.play()
      setPlay(!play)
    } else {
      videoRef.current.pause()
      setPlay(!play)
    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        ref={videoRef}
        onClick={handleStart}
        loop
        src={video}
      >
      </video>
    </div>
  )
}

export default Video
