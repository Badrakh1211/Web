
import './blog.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { ColorModeContext } from './theme'

export const instance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "app-id": "636a0100b23c1794f297d097"
  }
})

export const HomeScreen = () => {

}

export const saver = () => {
}

const Blog = () => {
  const [data, setData] = useState([]);



  const getData = async () => {
    try {
      const res = await instance.get('post')
      setData(res.data.data);
    } catch (err) {
      alert('dahiad yavul');
    }
  }

  const getUsers = async () => {
    const users = await instance.get('user');

    console.log(users.data);
  }


  useEffect(() => {
    getData()
    getUsers()
  }, []);
  const d = new Date();
  const month = d.getMonth() + 1


  const { darkMode, ToggleSwitch } = useContext(ColorModeContext)
  const changer = () => {
    ToggleSwitch()
  }

  let navigate = useNavigate()
  return (
    <div>
      <div className={`${darkMode && 'black'} header`}>
        <img className="img" src={require("./images/team. (1).png")}></img>
        <div className='switch'>
          <input onClick={changer} type="checkbox" className="checkbox" id="checkbox" ></input>
          <label for="checkbox" className={`label ${darkMode && 'black'}`} id="label" >
            <i className="fas fa-moon"></i>
            <i className='fas fa-sun'></i>
            <div className='ball'></div>
          </label>
        </div>
        <div className='link'>
          <Link className='Blog' to={'/'}>Home</Link>
          <Link className='Blog' to={'/Blog'}>Blog</Link>
          <Link className='Services' to={'/Services'} >Services</Link>
          <Link className='Contact' to={'/Contact'}>Contact</Link>
          <Link className='Login' to={'/Login'}>Log in</Link>
        </div>
        <button class="buttons"> Get access </button>
      </div>
      <div className={`${darkMode && 'black'} main1`}>
        <h1 className='blog-title'>Blog posts</h1>
        <p className='blog-text'>Our latest updates and blogs about managing your team</p>
        <div className='posts-container'>
          {/* <Posts sort="Animal,dog,golden retriever" date="Sara Anderson| Sun May 24 2020" />
          <Posts sort="snow,ice,mountain" />
          <Posts sort="dog,pet,canine"/>
          <Posts sort="" />
          <Posts />
          <Posts /> */}
          <div onClick={saver()}>
            <div className={`${darkMode && 'black'} App`} >
              {/* {data.map((cur) => <div>{cur.text} {cur.image} {cur.tags} {cur.owner.firstName} {cur.id} </div>)} */}
              {data.map((cur) => <Posts id={cur.id} pfp={cur.owner.picture} sort={cur.text} text={cur.tags} img={cur.image} date={cur.owner.firstName + "|" + d.getFullYear() + "/" + month + "/" + d.getDate()}></Posts>)}
              {/* {data.map((cur) => <Posts text={cur.text} image={cur.image} tags={cur.tags} firstName={cur.owner.firstName} id={cur.id} />)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Posts({ sort, text, date, img, pfp, id }) {
  const navigate = useNavigate()
  return (
    <div className='post-container' onClick={() => navigate(`/Post/${id}`)}>
      <div className='post'>
        <div className='post-image'>
          <img src={img} className="dogs"></img>
        </div>
        <div className='post-text'>
          <h2>{sort}</h2>
          <p className='text5'>{text}</p>
        </div>
        <div className='post-footer'>
          <div className='post-profile'>
            <img className="pfp" src={pfp} ></img>
          </div>
          <span className='sara'>{date}</span>
        </div>
      </div>
    </div>
  )
}
console.log("https://dummyapi.io/data/v1/")
export default Blog;  