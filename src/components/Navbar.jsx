import React from 'react'
import './../stylesheets/navbar.css'

import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiChatbot } from "react-icons/si";
import { BsListStars } from "react-icons/bs";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

function Navbar() {
  return (
    <div className='section'>
    <div className='container'>
        <div className='optionContainer'>
            <FaHome size={25} color='#fff'/>
            <span className='optionLabel'>Home</span>
        </div>
        <div className='optionContainer'>
            <FaSearch size={25} color='#fff'/>
            <span className='optionLabel'>Explore</span>
        </div>
        <div className='optionContainer'>
            <FaBell size={25} color='#fff'/>
            <span className='optionLabel'>Notifications</span>
        </div>
        <div className='optionContainer'>
            <IoMdMail size={25} color='#fff'/>
            <span className='optionLabel'>Messages</span>
        </div>
        <div className='optionContainer'>
            <SiChatbot size={25} color='#fff'/>
            <span className='optionLabel'>Grok</span>
        </div>  
        <div className='optionContainer'>
            <BsListStars size={25} color='#fff'/>
            <span className='optionLabel'>Lists</span>
        </div> 
        <div className='optionContainer'>
            <IoBookmarkSharp size={25} color='#fff'/>
            <span className='optionLabel'>Bookmarks</span>
        </div> 
        <div className='optionContainer'>
            <IoPeople size={25} color='#fff'/>
            <span className='optionLabel'>Communities</span>
        </div> 
        <div className='optionContainer'>
            <TbPremiumRights size={25} color='#fff'/>
            <span className='optionLabel'>Premium</span>
        </div>
        <div className='optionContainer'>
            <IoPerson size={25} color='#fff'/>
            <span className='optionLabel'>Profile</span>
        </div>
        <div className='optionContainer'>
            <CgMoreO size={25} color='#fff'/>
            <span className='optionLabel'>More</span>
        </div>
    </div>

    </div>
  )
}

export default Navbar