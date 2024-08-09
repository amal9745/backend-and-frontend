import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
    
const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
       <Link to="/Add"> <Button variant='contained'>ADD</Button></Link>
          <Link to="/View"> <Button variant='contained'>VIEW</Button></Link>
              </Toolbar>
          </AppBar>  
          <br /><br /><br />
    </div>
  )
}

export default Navbar
