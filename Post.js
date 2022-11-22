import logo from './logo.svg';
import './blog.css';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState, useContext, useRef } from "react";
import { ColorModeContext } from './theme';
import './post.css';
import { saver } from './Blog'

export const instance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097"
    }
})

function Post() {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [comment, setComment] = useState([])
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(0)
    const getData = async () => {
        try {
            const res = await instance.get(`post/${id}`)
            console.log(res)
            setData(res.data.image);
        } catch (err) {
            alert('dahiad yavul');
        }
    }

    // const getUsers = async () => {
    //     const users = await instance.get('user');

    //     console.log(users.data);
    // }

    // console.log(inputRef.current.value)
    useEffect(() => {
        getData()
        // getUsers()
    }, []);

    const { darkMode, ToggleSwitch } = useContext(ColorModeContext)
    const changer = () => {
        ToggleSwitch()
    }
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
            <div className='comment-container'>
                <img src={data} className="comment-image" />
            </div>
            <InputValue comment={comment} setComment={setComment} value={comment} />
            <div className='comment'>
                <input className='comments' placeholder='Write comment' ref={inputRef} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <Button onClick={() => { setComment([...comment, inputValue]); setInputValue('') }} value="comment" />
            </div>
        </div>
    )
}

function InputValue({ value, comment, setComment }) {
    const deleteComment = () => {
        const newList = comment.filter((cur) => cur !== value);
        setComment(newList)
    }
    return (
        <div className='sent'>
            <p className='m'>
                {comment.map((c) => <div>{c} <Button onClick={deleteComment} value="delete" /></div>)}
            </p>
        </div>
    )
}

function Button({ onClick, value }) {
    return (
        <button className='send' onClick={onClick}>{value}</button>
    )
}
export default Post;