import './App.css'
import Video from './pages/Video'

function App() {

  return (
    <>
      <div className='App'>
        <div className='app__videos'>
          <Video
            likes={608}
            messages={71}
            shares={28}
            name="NeinhoPinho"
            description="Gatinhos fofinhos"
            music="Animation theme music"
          />
          <Video
            likes={379}
            messages={36}
            shares={15}
            name="JoãoDória"
            description="mais Gatos!"
            music="Banda Kalipso"
          />
          <Video
            likes={29}
            messages={4}
            shares={4}
            name="Josuésss"
            description="uia Xaninhos"
            music="Breaking Benjamin - The Diary of Jany"
          />
        </div>
      </div>
    </>
  )
}

export default App
