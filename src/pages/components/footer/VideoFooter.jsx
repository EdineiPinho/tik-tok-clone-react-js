import './VideoFooter.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import disco from '../../../assets/disco.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// eslint-disable-next-line react/prop-types
function VideoFooter({ name, description, music }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3 className='videoFooter__name'>@{name}</h3>
        <p>{description}</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooter__icon' />
          <div className='videoFooterMusic__text'>
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className='videoFooter__record'
        src={disco}
        alt='imagem de disco girando'
      />
    </div>
  )
}

export default VideoFooter
