import './App.css'
import Video from './pages/Video'
import React from 'react'
import db from '../src/config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  const [videos, setVideos] = React.useStates([])

  async function getVideos() {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    const videoList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videoList)
  }

  React.useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      <div className='App'>
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
