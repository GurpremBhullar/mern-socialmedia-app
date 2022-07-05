import React from 'react'
import './Post.css'
import { BiLike } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';

const Post = ({ data }) => {
  return (
    <div className='Post'>
        <img src={data.img} alt="" />

        <div className="postReact">
            <BiLike />
            <BiDislike />
            <BiCommentDetail />
            <BsShare />
        </div>


    <span>{data.likes} likes</span>
    <div className='detail'>
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
    </div>
    </div>
  )
}

export default Post



