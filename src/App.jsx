import './App.css'
import Video from './pages/Video'
import React from 'react'
import db from '../src/config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {

  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [videos, setVideos] = React.useState([])

  async function getVideos(db) {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    const videoList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videoList)
  }

  React.useEffect(() => {
    getVideos(db)
  }, [])

  return (
    <>
      <div className='App' style={{ maxHeight: maxHeight + 'px' }}>
        <div className='app__videos'>

          {videos.map((video, index) => {
            return (
              <Video
                key={index}
                likes={video.likes}
                messages={video.messages}
                shares={video.shares}
                name={video.name}
                description={video.description}
                music={video.music}
                url={video.url}
              />
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
