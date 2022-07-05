import React from 'react'
import './RightSide.css'
import { BiHomeAlt } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiCommentAdd } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import TrendCard from '../TrendCard/TrendCard';




const RightSide = () => {
  return (
    <div className='Rightside'>
        <div className='navIcons'>
            <BiHomeAlt/>
            <IoIosNotificationsOutline />
            <BiCommentAdd />
            <FiSettings />
        </div>

        <TrendCard />

        <button className='button r-button'>
            Share
        </button>
    </div>
  )
}

export default RightSide






