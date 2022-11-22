import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import React, { useRef, useState, useContext } from 'react';
import { ColorModeContext } from './theme'

const Data = [{ names: 'Amy KLassen', text: 'Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.' },
{ names: 'Jane Cooper', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
{ names: 'ELenoer Pena', text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.' }]

function App() {
  const [theme, themeChanger] = useState('white')
  const [count, countChanger] = useState(0)
  const { darkMode, ToggleSwitch } = useContext(ColorModeContext)
  const changer = () => {
    ToggleSwitch()
    // const label = document.getElementById("label")
    // const ball = document.getElementById("checkbox")
    // countChanger(count + 1)
    // if (count % 2 === 0 ) {
    //   label.style.backgroundColor = "black"
    // } else {
    //   label.style.backgroundColor = "#1338BE"
    // }
  }

  const json = {
    key: 'value'
  }

  const inputEmail = useRef(0)
  const focusInput = () => {
    alert(`${inputEmail.current.value} successfully got access `)
    inputEmail.current.value = ''
  }
  return (
    <div className={`container`}>
      <div className='box'>
        <div className='title'>
          <div>
            <input onClick={changer} type="checkbox" className="checkbox" id="checkbox" ></input>
            <label for="checkbox" className={`label ${darkMode && 'black'}`} id="label" >
              <i className="fas fa-moon"></i>
              <i className='fas fa-sun'></i>
              <div className='ball'></div>
            </label>
          </div>
          <div className='links'>
          <Link className='Blog' to={'/'}>Home</Link>
            <Link className='Blog' to={'/Blog'}>Blog</Link>
            <Link className='Services' to={'/Services'} >Services</Link>
            <Link className='Contact' to={'/Contact'}>Contact</Link>
            <Link className='Login' to={'/Login'}>Log in</Link>
          </div>
          <br></br>
        </div>
        <button className='access'>Get Access</button>
      </div>
      <div>
        <div className='box1'>
          <h1 className='collab' >Instant collaborations</h1>
          <h1 className='collab1' >for remote teams</h1>
          <p className='text'> All in one for your remote team chats,</p>
          <p className='text1'> collaboration and track projects </p>
          <div>
            <input ref={inputEmail} type='email' placeholder='Email' className='input' id='id'></input>
            <button onClick={focusInput} className='button'>Get early access</button>
          </div>
        </div>
      </div>
      <div className={`main`} >
        <div className={`${darkMode && 'black'} child`}>
          <div className={`${darkMode && 'black'} grid`} >
            <h1 className='text-title' >Your Hub for teamwork</h1>
            <p className='content'>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
            <p className='learn-more'>Learn more</p>
          </div>
          <div className='grid1'>
            <img className='base' src={require('./images/event 1.png')}></img>
            <img className='bell' src={require('./images/icon.png')}></img>
            <img className='cal' src={require('./images/icon (1).png')}></img>
            <img class="otto-image" src={require('./images/ooto Meetings 1.png')}></img>
          </div>
        </div>
        <div className={`${darkMode && 'black'} child1`}>
          <div className='grid2' >
            <img className='wom' src={require('./images/event 2.png')}></img>
            <img className='woms' src={require('./images/event 3.png')}></img>
            <img className='left-image' src={require('./images/brooke-cagle-JBwcenOuRCg-unsplash (1) 1.png')}></img>
          </div>
          <div className='grid3'>
            <h1 className='simple'>Simple task management</h1>
            <p class="text2" >Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
            <p className='learn'>Learn more</p>
          </div>
        </div>
        <div className={`${darkMode && 'black'} child2`}>
          <div className='grid4'>
            <h1 className='act' >Scheduling that actually works</h1>
            <p className='give'>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
          </div>
          <div className='grid5'>
            <img className="calendar" src={require('./images/Group 18.png')}></img>
            <img className="man" src={require('./images/brooke-cagle-JBwcenOuRCg-unsplash (1) 1 (1).png')}></img>
          </div>
        </div>
        <div className={`${darkMode && 'black'} main2`}>
          <div className='grid6' >
            <h1 className='people'>What people say about us</h1>
          </div>
          <div className='grid7'>
            {
              Data.map(e => <Avatar names={e.names} text={e.text} />)
            }
          </div>
          <div className='grid8'>
            <img className="arrow-left" src={require("./images/arrow_back_24px.png")} ></img>
            <img className="arrow-right" src={require("./images/arrow_forward_24px.png")}></img>
          </div>
        </div>
        <div className={`${darkMode && 'black'} footer`}>
          <div className='social'>
            <img src={require('./images/team. (1).png')}></img>
            <div>
              <img src={require("./images/Instagram.png")}></img>
              <Social Name="Instagram" />
            </div>
            <div>
              <img src={require("./images/Facebook.png")}></img>
              <Social Name="Facebook" />
            </div>
            <div>
              <img src={require("./images/Twitter.png")}></img>
              <Social Name="Twitter" />
            </div>
            <div>
              <img src={require("./images/Instagram.png")}></img>
              <Social Name="Instagram" />
            </div>
            <div>
              <img src={require("./images/Facebook.png")}></img>
              <Social Name="Facebook" />
            </div>
            <div>
              <img src={require("./images/Twitter.png")}></img>
              <Social Name="Twitter" />
            </div>
          </div>
          <div className='design'>
            <h2 className='tag'>Use Cases</h2>
            <p className='U'>UI design</p>
            <p className='U'>UX design</p>
            <p className='U'>Prototyping</p>
            <p className='U'>UI design</p>
            <p className='U'>UX design</p>
            <p className='U'>Prototyping</p>
          </div>
          <div className='explore'>
            <h1 className='tag'>Explore</h1>
            <p className='U'>Figma</p>
            <p className='U'>Costumers</p>
            <p className='U'>Why i love figma</p>
            <p className='U'>Figma</p>
            <p className='U'>Costumers</p>
            <p className='U'>Why i love figma</p>
          </div>
          <div className='rec'>
            <h1 className='tag'>Resources</h1>
            <p className='U'>Community Resources Hub</p>
            <p className='U'>Support</p>
            <p className='U'>Education</p>
            <p className='U'>Community Resources Hub</p>
            <p className='U'>Support</p>
            <p className='U'>Education</p>
          </div>
          <div className='sub'>
            <h1 className='subs'>Subscribe to our newsletter</h1>
            <input placeholder='Email' className='inputs'></input>
            <button className='Add' onClick={focusInput}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Avatar = ({ text, names }) => {
  return (
    <div className='card1' >
      <div className='stars'>
        <svg className="star1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <svg className="star" mlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        <svg className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
      </div>
      <div className='zo'>
        <p className='zo1' >{text}</p>
      </div>
      <div className='footer-card'>
        <div className='frame'></div>
        <span className='name'>{names}</span>
      </div>
    </div>
  )
}
const Social = ({ Name }) => {
  return (
    <span className='brand'>{Name}</span>
  )
}

export default App;
