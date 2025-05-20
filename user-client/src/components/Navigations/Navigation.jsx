import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { Button } from '@mui/material'
import { FaAngleDown } from "react-icons/fa6";
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav>
          <div className='container-fluid'>
              <div className='row'>
                <div className='col-sm-2 navPart1'>
                  <Button className='allCartTabs align-items-center'>
                    <span className='icon1'><IoIosMenu/></span>
                    <span className='text'>ALL Categories</span>
                    <span className='icon2'><FaAngleDown/></span>
                  </Button>
                </div>

                <div className='col-sm-10 navPart2 d-flex justify-content-center'>
                  <div className='navPart2-1'>
                    <ul className='list list-inline ml-auto'>
                      <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Fashion</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Electric</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Bakery</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Mobile</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                      <li className='list-inline-item'><Link to="/"><Button>Contacts</Button></Link></li>                    
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </nav>
    </div>
  )
}

export default Navigation