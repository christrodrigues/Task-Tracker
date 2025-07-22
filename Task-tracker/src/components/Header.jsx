import React from 'react'
import Button from './Button'

const Header = ({ title = 'Task Tracker' }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='black' text='Add' />
    </header>
  )
}



export default Header