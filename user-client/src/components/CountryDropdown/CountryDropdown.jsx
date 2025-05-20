import React from 'react'
import {Button} from '@mui/material'
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import './CountryDropdown.css'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = React.useState(false);

  return (
    <div>
      <Button className='countryDrop' onClick ={() => setIsOpenModel(true)}> 
        <div className='info d-flex flex-column'>
          <span className='lable'>Your Location</span>
          <span className='name'>Da Nang</span>
        </div>
        <span className='ml-auto'><FaAngleDown/></span>
      </Button>

      <Dialog
          open={isOpenModel}
          onClose={() => setIsOpenModel(false)}
          className='locationDialog'
          TransitionComponent={Transition}
      >
        <h4 className='mb-0'>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close-icon' onClick ={() => setIsOpenModel(false)}><IoMdClose></IoMdClose></Button>


        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search for products'/>
          <Button><CiSearch /></Button>
        </div>

        <ul className='countryList mt-2'>
          <li><Button>Hà Nội</Button></li>
          <li><Button>Hồ Chí Minh</Button></li>
          <li><Button>Quảng Nam</Button></li>
          <li><Button>Nha Trang</Button></li>
          <li><Button>Cần Thơ</Button></li>
          <li><Button>Đà Lạt</Button></li>
          <li><Button>Hà Nội</Button></li>
          <li><Button>Hồ Chí Minh</Button></li>
          <li><Button>Quảng Nam</Button></li>
          <li><Button>Nha Trang</Button></li>
          <li><Button>Cần Thơ</Button></li>
          <li><Button>Đà Lạt</Button></li>
          <li><Button>Hà Nội</Button></li>
          <li><Button>Hồ Chí Minh</Button></li>
          <li><Button>Quảng Nam</Button></li>
          <li><Button>Nha Trang</Button></li>
          <li><Button>Cần Thơ</Button></li>
          <li><Button>Đà Lạt</Button></li>
        </ul>
      </Dialog>
  </div>
  )
}

export default CountryDropdown