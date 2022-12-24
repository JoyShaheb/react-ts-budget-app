import React from 'react'
import BottomNavButton from '../BottomNavButton/BottomNavButton';
import SendIcon from '@mui/icons-material/Send';

const Send = () => {
  return (
    <BottomNavButton icon={<SendIcon fontSize='small'/>} label="Send"/>
  )
}

export default Send