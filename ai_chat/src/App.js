import React, { useState ,useEffect} from 'react';
import './App.css';
import './normal.css';
import img from './img.jpg'
import gptlogo from './gptlogo.png'
import { TbPinned } from "react-icons/tb";
import { FaFilePen } from "react-icons/fa6";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { CgPlayPauseR } from "react-icons/cg";
import { RiLinksLine } from "react-icons/ri";
import { GiClockwiseRotation } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";





function App() {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);
  const [dropdownVisible4, setDropdownVisible4] = useState(false);
  const [dropdownVisible5, setDropdownVisible5] = useState(false);
  const [dropdownVisible6, setDropdownVisible6] = useState(false);
  const [dropdownVisible7, setDropdownVisible7] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const handleSendClick = () => {
    setContentVisible((prevContentVisible) => !prevContentVisible);
  };

  useEffect(() => {
    // Use your actual condition for initially visible content
    const shouldContentBeVisibleInitially = true; // Change this to your actual condition
    setContentVisible(shouldContentBeVisibleInitially);
  }, []);


  const toggleDropdown7 = () => {
    setDropdownVisible7(!dropdownVisible7);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };
  const toggleDropdown3 = () => {
    setDropdownVisible3(!dropdownVisible3);
  };
  const toggleDropdown4 = () => {
    setDropdownVisible4(!dropdownVisible4);
  };
  const toggleDropdown5 = () => {
    setDropdownVisible5(!dropdownVisible5);
  };
  const toggleDropdown6 = () => {
    setDropdownVisible6(!dropdownVisible6);
  };
  return (
    <div className='App'>
      <aside className={`sidemenu ${dropdownVisible ? 'profile-open' : ''}`}>
        <h1>PROPTIMIZE</h1>
        <div className='side-menu-button'>
          <span><FaFilePen/></span>
          New Chat
        </div>
        <div className='side-menu-pin'>
        <span>
         <TbPinned/>
        </span>
         Pinned Chats
        </div>
        <div className='side-menu-chats'> 
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown1}><PiDotsThreeOutlineVerticalFill /></span></p>
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown2}><PiDotsThreeOutlineVerticalFill /></span></p>
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown3}><PiDotsThreeOutlineVerticalFill /></span></p>
        </div>
        
        <div className='side-menu-today'>
         Today
        </div>
        <div className='side-menu-today-chat'> 
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown4}><PiDotsThreeOutlineVerticalFill /></span></p>
        </div>

        <div className='side-menu-week'>
        Previous 7 Days
        </div>
        <div className='side-menu-week-chats'> 
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown5}><PiDotsThreeOutlineVerticalFill /></span></p>
          <p>What are the best places to live in Ottawa..<span onClick={toggleDropdown}><PiDotsThreeOutlineVerticalFill /></span></p>
          <p>What are the best places to live in Ottawa..
            <span onClick={toggleDropdown6}><PiDotsThreeOutlineVerticalFill /></span></p>
        </div>
        {dropdownVisible && (
            <div id="myDropdown" className="dropdown-content">
            <a href="#" ><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
            
          )}
         
         {dropdownVisible1 && (
            <div id="myDropdown" className="dropdown-content1">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
            
          )}

{dropdownVisible2 && (
            <div id="myDropdown" className="dropdown-content2">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
            
          )}
{dropdownVisible3 && (
            <div id="myDropdown" className="dropdown-content3">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
            
          )}
          {dropdownVisible4 && (
            <div id="myDropdown" className="dropdown-content4">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>  
          )}
          {dropdownVisible5 && (
            <div id="myDropdown" className="dropdown-content5">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
          )}
          {dropdownVisible6 && (
            <div id="myDropdown" className="dropdown-content6">
              <a href="#"><span><TbPinned/></span>Pin Chat</a>
              <a href="#"><span><FaLink /></span>Copy Chat Link</a>
              <a href="#"><span><MdDriveFileRenameOutline /></span>Rename</a>
              <a href='#' className='delete'><span ><MdDeleteForever /></span>Delete Chat</a>
            </div>
            
          )}
        

        <div className={`profile ${dropdownVisible7 ? 'profile-open' : ''}`} >
  <img src={img} alt='Profile'></img>
 Aman Kumar
  <span className={`arrow ${dropdownVisible7 ? 'down' : 'up'}`} onClick={toggleDropdown7}></span>
  {dropdownVisible7 && (
    <div id='profileDropdown' className='profile-dropdown'>
      <a href='#'>My Account </a>
      <a href='#'>My Wallet</a>
      <a href='#'>My Subscription</a>
      <a href='#'>View Map</a>
   <span> <a href='#'>Log Out</a></span>
    </div>
  )}
</div>

</aside>


      <section className='chatbox' >
      {(contentVisible && (
          <div className='upper-content'>
            <div className='content'>
              <img src={gptlogo}></img>
             <h5>Welcome Can! , What are you working on today?</h5> 
            </div>
            <div className='center-text'>
              "Use Search Feature to analyse neighbourhood demographics "
            </div>
               <div className='bars'>
            <div className='bar1'>
              <p>What are the best Places to live in Ottawa as a tech worker?</p>
              <span>Search web for nearby amenties.</span>
            </div>
            <div className='bar2'>
            <p>What are the best Places to live in Ottawa as a tech worker?</p>
            <span>Search web for nearby amenties.</span>
         </div>
            </div>
            </div>))||(

            
            <div className='content-after'>
              
                 <div className='echo-logo'>
                 <IoDiamond />

                  <h7>Echo Premium</h7>
                 </div>
                
                <div className='chat-part1'>
                  <img src={img}/>
                 <span>You</span> 
                 <p>What are the best Places to live in Ottawa as a tech worker? Search web for nearby amenties.</p>
                </div>

                <div className='gpt-part1'>
                  <img src={gptlogo}/>
                 <span>Echo</span> 
                 <p>Based on the web search.some of the best places to live in Ottawa for a tech worker include <br/>
                 the South March Hightlands Conservation Forest.<br/><br/>This loaction is recommended for tech worker and govermment workers.
                 suggestions a neighbourhood that can<br/> meet your professional needs. The city of Ottawa is also known for generating a large number of jobs annually.<br/>
                 which may be benefical for career growth in the tech sector.Laslty, Ottawa is one of the top-ranked tech talent <br/>
                 markers,incicating a robust tech ecosystem. 
                 </p>
                 <div className='co-re'>
                  <p><FaLink /></p><span><GiClockwiseRotation /></span>
                 </div>
                </div>
                <div className='lower'>
                <div className='chat-part2'>
                  <img src={img}/>
                 <span>You</span> 
                 <p>What are the best Places to live in Ottawa as a tech worker? Search web for nearby amenties.</p>
                </div>
                <div className='gpt-part2'>
                  <img src={gptlogo}/>
                 <span>Echo</span> 
                 <p>Based on the web search.some of the best places to live in Ottawa for a tech worker include <br/>
                 the South March Hightlands Conservation Forest.<br/><br/>This loaction is recommended for tech worker and govermment workers.
                 suggestions a neighbourhood that can<br/> meet your professional needs. The city of Ottawa is also known for generating a large number of jobs annually.<br/>
                 which may be benefical for career growth in the tech sector.Laslty, Ottawa is one of the top-ranked tech talent <br/>
                 markers,incicating a robust tech ecosystem. 
                 </p>
                 <div className='co-re1'>
                  <p><FaLink /></p><span><GiClockwiseRotation /></span>
                 </div>
                </div>
                </div>
           
                 
            </div>

          
            )}
{/*..............................................................................................................*/}




<div className='lower-con'> 
            <input type='text' placeholder='Message Echo..'></input>
            <div className='file'><RiLinksLine /></div>
            <div className='send '   onClick={handleSendClick}>{ contentVisible ? <IoIosSend /> : <CgPlayPauseR />}</div>
            </div>
      </section>

 


</div>
  );

  
}

export default App;
