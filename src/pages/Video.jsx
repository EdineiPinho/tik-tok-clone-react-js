// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Video.css'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

// eslint-disable-next-line react/prop-types
function Video({ likes, messages, shares, name, description, music, url }) {
  const [play, setPlay] = React.useState(false)
  const videoRef = React.useRef(null)

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
        src={url}
        type="video/mp4"
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
