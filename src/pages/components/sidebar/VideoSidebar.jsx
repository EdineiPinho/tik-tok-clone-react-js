// eslint-disable-next-line no-unused-vars
import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = React.useState(false)

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <div className='videoSidebar'>
      <div
        className='videoSidebar__options'
        onClick={handleLike}
      >
        {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar__options'>
        <ChatIcon fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSidebar__options'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar