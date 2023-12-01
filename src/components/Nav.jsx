import React, { useState } from 'react';
import usa from '../img/usa.svg';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [bntState,setBtnState] = useState('d-block')
    const [dropState,setDropDownState] = useState('d-none')

  return (
    <div>
        {/* Top Navbar */}
        <div className=' top-nav navbar navbar-expand-xl bg-light'>
            <div className=' container align-items-center justify-between '>
                <div className=' flex me-5'>
                    <i className=' bi bi-truck me-2 align-items-center'></i>
                    <small className=' text-uppercase fs-extra-sm' >free shipping worldwide</small>
                </div>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto gap-2">
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-black flex position-relative " href="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
                            
                                <img src={usa} className=' position-absolute' style={{width: '20px',}} alt="" />
                                <span className=' ms-4 fs-sm'>United State</span>
                            </a>
                            
                        <ul className="dropdown-menu" >
                            <li><a className="dropdown-item fs-sm" href="#">USD</a></li>
                            <li><a className="dropdown-item fs-sm" href="#">EUR</a></li>
                            <li><a className="dropdown-item fs-sm" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link fs-sm dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item fs-sm" href="#">Action</a></li>
                                <li><a className="dropdown-item fs-sm" href="#">Another action</a></li>
                                <li><a className="dropdown-item fs-sm" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link fs-sm dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item fs-sm" href="#">Action</a></li>
                                <li><a className="dropdown-item fs-sm" href="#">Another action</a></li>
                                <li><a className="dropdown-item fs-sm" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-5">
                        <li className="nav-item ">
                            <a className="nav-link text-black nav-text-sm" href="#" role="button" >
                                Shipping
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-black nav-text-sm" href="#" role="button" >
                                Faq
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-black nav-text-sm" href="#" role="button" >
                            Contact
                            </a>
                        </li>
                        
                    </ul>

                    {/* icons */}
                    <ul className="navbar-nav nav-flex flex-row gap-2">
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-facebook text-black-50'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-instagram text-black-50'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-twitter text-black-50'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-medium text-black-50'></i>
                            </a>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        {/* sec navbar */}
        <div className=' top-nav navbar navbar-expand-xl bg-white py-5'>
            <div className=' container align-items-center justify-between '>
                <div className='  me-4'>
                    <h3 className=' font-extrabold'>Shopper.</h3>
                    
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#secNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="secNav">
                    
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <Link to={'/'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/catalog'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                                Catalog
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/shop'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                            Shop
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/about'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                            About
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/faq'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                            Faq
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/docs'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                            Doc
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={'/shipping'} className="nav-link text-black nav-text-sm" href="#" role="button" >
                            Shipping
                            </Link>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav nav-flex flex-row gap-2">
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-search'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-person'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#" role="button" >
                                <i className=' bi bi-heart'></i>
                            </a>
                            
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link nav-cart-noti block" href="#" role="button" >
                                <span className=' position-absolute top-0 num'>5</span>
                                <i className=' bi bi-cart'></i>
                            </a>
                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

        {/* promo */}

        <div className=' py-3 bg-nav-dark bg-nav-img mb-5'>
            <div className=' container'>
                <div className=' row text-center'>
                    <p className=' text-white mb-0'>⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Nav