import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  console.log(book)

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' /><br />
      <input type="text" placeholder='desccription' onChange={handleChange} name='desc' /><br />
      <input type="number" placeholder='price' onChange={handleChange} name='price' /><br />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' /><br />
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update