// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './Video.css'
import video from '../assets/video1.mp4'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({ likes, messages, shares, name, description, music }) {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  function handleStart() {
    if (!play) {
      8
      videoRef.current.play()
      videoRef.current.volume = 0.05

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
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />
    </div>
  )
}

export default Video
