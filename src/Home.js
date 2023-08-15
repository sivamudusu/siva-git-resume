import React, { useState,useEffect } from 'react'
import "./Home.css";
import {myImage}from "./images/mars-2051747_1280_1633226355891_1666361960597_1666361960597.avif";


function Home() {
  const words = ['Web Apps','Web Sites','Landing pages','mobie Apps'];
  const[typedText,setTypedText] = useState("");
  const textToType = "Hello there! Iam Shiva .";
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    let prevTypedText = "";

    const typingInterval = setInterval(() => {
      setTypedText(prevTypedText = prevTypedText + textToType[currentIndex]);
      currentIndex++;

      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {

      const randomLetters = Array.from({ length: displayedText.length }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      ).join('');

      setDisplayedText(randomLetters);

      setTimeout(() => {
        // After a short delay, update to the next word in the list
        setCurrentWordIndex(prevIndex =>
          (prevIndex + 1) % words.length
        );
      }, 300); // Delay before updating to the next word
    }, 2000); // Change word every 2 seconds (adjust as needed)
    
    return () => {
      clearInterval(interval);
    };
  }, [displayedText]);

  return (
    <div className='home-page'>
      <div className='header'>
        <div className='head-left'>
          <div className='profile-image'>
            <img className='image-content' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb92kReioQt1PlW3dkLYLz_-0tfiGAs8nGHA&usqp=CAU' alt=''/>
          </div>
          <div className='about'>about </div>
          <div className='study'>study </div>
          
        </div>
        <div className='head-right'>
          <div className='search'>
            <input placeholder='search or jumt to'/>
          </div>
          <div className='contact'>contact</div>
        </div>
        
      </div>
      <div className='body'>
        <div className='body-left'>
        <div className='col1-dflex'>
            <img src='https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg' alt='image'/>
            <div className='glowing'>
                <div className='inline-bloc'>
                    <h3>hell0</h3>
                </div>
            </div>
        </div>
        </div>
        <div className='body-right'>
          <div className='intro'>
            <span className='typewriter-text'>{typedText}</span>
          </div>
          <div className='dynamic-text'>
            <h2> <span className='i'>i</span> <span className='can'>can</span> <span className='create'>create</span> and <span className='develop'>develop</span>   {displayedText || words[currentWordIndex]}</h2>
          </div>
        </div>
      </div>
       <div className='dflex'>
        
       </div>
    </div>
  )
}

export default Home