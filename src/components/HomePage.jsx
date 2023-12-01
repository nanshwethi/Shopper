import React, { useEffect, useState } from 'react';
import {VscLock} from 'react-icons/vsc'
import {GoTag} from 'react-icons/go'
import front1 from '../img/front1.jpg'
import back1 from '../img/back1.jpg'
import front2 from '../img/front2.jpg'
import back2 from '../img/back2.jpg'
import front3 from '../img/front3.jpg'
import back3 from '../img/back3.jpg'
import front4 from '../img/front4.jpg'
import back4 from '../img/back4.jpg'
import front5 from '../img/front5.jpg'
import back5 from '../img/back5.jpg'
import pro5 from '../img/product-5.jpg'
import pro6 from '../img/product-6.jpg'
import pro7 from '../img/product-7.jpg'
import pro10 from '../img/product-10.jpg'
import pro11 from '../img/product-11.jpg'
import pro9 from '../img/product-9.jpg'
import pro12 from '../img/product-12.jpg'
import pro13 from '../img/product-13.jpg'
import pro14 from '../img/product-14.jpg'
import pro15 from '../img/product-15.jpg'
import adidas from '../img/adidas.svg'
import mango from '../img/mango.svg'
import amex from '../img/amex.svg'
import asos from '../img/asos.svg'
import bershka from '../img/bershka.svg'
import reebok from '../img/reebok.svg'
import zara from '../img/zara.svg'
import stradivarius from '../img/stradivarius.svg'
import {AiOutlineEye,AiOutlineHeart} from 'react-icons/ai'
import {LuShoppingCart} from 'react-icons/lu'
import Demo from './HomeCarousel';
import { Link } from 'react-router-dom';
import Footer from '../pages/Footer';
import { useSelector } from 'react-redux';
import Nav from './Nav';

const HomePage = () => {

    const [day,setDay] = useState('');
    const [hour,setHour] = useState('');
    const [minute,setMinute] = useState('');
    const [sec,setSec] = useState('');
    const [change,setChange] = useState(false)

    const isOpen = useSelector((state) => state.navbar.isOpen);
    const isOpen2 = useSelector((state) => state.navbar.isOpen2);


    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    // Update the count down every 1 second
    useEffect(()=>{
        
         var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // console.log(distance,distance % (1000 * 60 * 60 * 24));
        // Display the result in the element with id="demo"
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSec(seconds)

        // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                setPromo('expire')
            }
        
    }, 1000);

    },[])

    function onclickhandler(e){
        const isIt = document.querySelector('.active-border')
        if(isIt != null){
            isIt.classList.remove('active-border')
            
        }e.target.classList.add('active-border')

    }

  return (
    <>
     {/* category */}
     
    {/* hero section */}
    {/* <Navbar />
    <SecNavbar />
    <Promotion/> */}

    <div>
    <section className = "">
       <div className="row gx-0">
                <div className=' col-12 col-md-6 col-lg-4 hero-1'>
                    <div className=' text-white text-center d-flex flex-column hover-bg cursor-pointer ' style={{minHeight : '470px'}}>
                        <div className=' mt-auto py-5 mb-mn'>
                            <h1 className=' mb-0 fw-bolder'>Women</h1>
                        </div>
                        <div className=' mt-auto py-5 link'>
                            {/* btn ကို shop အတွက် link အုပ် */}
                            <Link to={'/shop'} className=' a'>
                                <button className=' custom-btn btn-white bg-white rounded-0 move'>
                                    Shop Women
                                    <i className="bi bi-arrow-right ms-2 fw-bold d-inline-block text-black"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 hero-2'>
                    <div className=' text-white text-center d-flex flex-column hover-bg-2' style={{minHeight : '470px'}}>
                        <div className=' mt-auto mb-mn'>
                            <h1 className=' mb-0 fw-bolder'>Men</h1>
                        </div>
                        <div className=' mt-auto py-5 link'>
                            <Link to={'/shop'} className=' a'>
                            <button className=' custom-btn btn-white bg-white rounded-0 move-2'>Shop Men <i className="bi bi-arrow-right d-inline-block ms-2 fw-bold"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 hero-3'>
                    <div className=' text-white text-center d-flex flex-column hover-bg-3' style={{minHeight : '470px'}}>
                        <div className=' mt-auto mb-mn'>
                            <h1 className=' mb-0 fw-bolder'>Kids</h1>
                        </div>
                        <div className=' mt-auto py-5 link'>
                            <Link to={'/shop'} className=' a'>
                            <button className=' custom-btn btn-white bg-white rounded-0 move-3'>Shop Kids <i className="bi bi-arrow-right d-inline-block ms-2 fw-bold"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    {/* features */}
    <section>
        <div className=' pt-7 border-bottom'>
            <div className=' container'>
                <div className=' row pb-7'>
                    <div className=' col-12 col-md-6 col-lg-3'>
                        <div className=' d-flex'>
                            <i className=' bi bi-truck primary'></i>
                            <div className=' ms-3'>
                                <h6 className=' fs--1 text-uppercase mb-1 fs--1-w'>free shipping</h6>
                                <p className=' fs--2 text-muted '>From all orders over $100</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 col-lg-3'>
                        <div className=' d-flex'>
                            <i className="bi bi-repeat primary"></i>
                            <div className=' ms-3'>
                                <h6 className=' fs--1 text-uppercase mb-1 fs--1-w'>FREE RETURNS</h6>
                                <p className=' fs--2 text-muted '>Return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 col-lg-3'>
                        <div className=' d-flex'>
                            <VscLock className=' primary'/>
                            <div className=' ms-3'>
                                <h6 className=' fs--1 text-uppercase mb-1 fs--1-w'>SECURE SHOPPING</h6>
                                <p className=' fs--2 text-muted '>You're in safe hands</p>
                            </div>
                        </div>
                    </div>
                    <div className=' col-12 col-md-6 col-lg-3'>
                        <div className=' d-flex'>
                            <GoTag className=' primary'/>
                            <div className=' ms-3'>
                                <h6 className=' fs--1 text-uppercase mb-1 fs--1-w'>OVER 10,000 STYLES</h6>
                                <p className=' fs--2 text-muted '>We have everything you need</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* best pick */}
    <section className=' pt-12'>
        <div className=' container'>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                    <h6 className=' fs--1  mb-3  fs--1-w text-gray-400 '>NEW COLLECTION</h6>
                    <h2 className=' mb-4'>Best Picks 2019</h2>
                    <p className=' mb-10 text-gray-500'>Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.</p>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 col-md-5 col-lg-4 d-flex flex-column overflow-hidden position-relative ">
                    <div className=' best-card mb-7' style={{minHeight : '400px'}}>
                        <div className="best-card-bg">
                            <div className=' pro1-bg pro-1'></div>
                        </div>
                        <div className=" flex my-auto px-5 text-white link">
                            <h3 className=' mb-0'>Bags Collection</h3>
                            <Link to={'/shop'} className=''>
                            <button className=' px-3 py-2 border-0 bg-transparent move text-white'>Shop Now
                            <i className="bi bi-arrow-right ms-2 d-inline-block "></i>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' col-12 col-md-7 col-lg-8 d-flex flex-column'>
                    <div className=' best-card mb-7' style={{minHeight : '400px'}}>
                        <div className="best-card-bg">
                            <div className=' pro1-bg pro-2'></div>
                        </div>
                        <div className=" flex my-auto px-5 link" >
                            <div className=' save d-flex flex-column justify-content-center align-items-center'>
                                <p className=' mb-0 text-white fw-semibold'>save</p>
                                <span className='text-white fw-semibold fs-3'>30%</span>
                            </div>
                            <h4 className=' mb-0'>Printed men's Shirt</h4>
                            <Link to={'/shop'} className=' text-black'>
                            <button className=' px-3 py-2 border-0 bg-transparent move'>Shop Now
                            <i className="bi bi-arrow-right ms-2 d-inline-block "></i>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=' col-12 col-md-7 col-lg-8 d-flex flex-column'>
                    <div className=' best-card mb-7' style={{minHeight : '400px'}}>
                        <div className="best-card-bg">
                            <div className=' pro1-bg pro-3'></div>
                        </div>
                        <div className=" flex my-auto px-5 link">
                            <h4 className=' mb-0'>Basic Women's Dresses</h4>
                            <Link to={'/shop'} className=' text-black'>
                            <button className=' px-3 py-2 border-0 bg-transparent move'>Shop Now
                            <i className="bi bi-arrow-right ms-2 d-inline-block "></i>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-4 d-flex flex-column overflow-hidden position-relative ">
                    <div className=' best-card mb-7' style={{minHeight : '400px'}}>
                        <div className="best-card-bg">
                            <div className=' pro1-bg pro-4'></div>
                        </div>
                        <div className=" flex my-auto px-5 text-white link">
                            <h4 className=' mb-0'>Sweet Shirt</h4>
                            <Link to={'/shop'}>
                            <button className=' px-3 py-2 border-0 bg-transparent move text-white'>Shop Now
                            <i className="bi bi-arrow-right ms-2 d-inline-block "></i>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* top mounth seller */}
    <section className=' py-12'>
        <div className="container">
            <div className="row justify-content-center">
                <div className=' col-12 col-md-10 col-lg-8 col-xl-6'>
                    <h2 className=' mb-4 text-center'>Top month Seller</h2>
                    <div className="sh-nav mb-10 justify-content-center " id="myTab" role="tablist">
                        <a className="sh-nav-link active text-black" href='#myTabContent' data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Women</a>
                        <a className="sh-nav-link text-black" href='#myTabContent' data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Men</a>
                        <a className="sh-nav-link text-black" href='#myTabContent' data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Kids</a>
                        
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    {/* modal */}
                    <div className="modal fade my-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content d-flex flex-column flex-md-row justify-content-center position-relative">
                                <div className=' d-flex flex-column '>
                                    <img src={front3} alt="" className=' w-100 h-100 my-modal-img'  />
                                    <div className=' text-center bg-danger py-3'>
                                        <p className=' mb-0 text-white fw-semibold'>More Product Info <i className=' bi bi-exclamation-circle'></i></p>
                                    </div>
                                </div>
                                <div className=' px-3 py-5 px-md-5'>
                                    <button type="button" className=" border-0 fs-4 fw bg-transparent d-block ms-auto modal-close" data-bs-dismiss="modal"><i className=' bi bi-x-lg fw-bolder text-black-50'></i></button>
                                    <h1>Shose</h1>
                                    <p className=' h3 mb-4'>$85.00 <small className=' text-xs text-black-50 fw-light'>(In Stock)</small></p>
                                    <p className=' '>Color: <span> White</span></p>
                                    <div className=' d-flex gap-1 my-4 '>
                                        <img src={front3} alt="" style={{width : '100px'}}/>
                                        <img src={front3} alt="" style={{width : '100px'}}/>
                                    </div>
                                    <div className=' py-4'>
                                    <p className=' text-black-50 '>Size: <span className=' text-black fw-medium'>7.5 US</span></p>
                                    <div className=' d-flex gap-2 flex-wrap'>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>6</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold text-decoration-line-through border`} style={{width: '50px',height: '50px'}} onClick={()=>setSelect10(!select10)}>6.5</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>7</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>7.5</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>8</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>8.5</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>9</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>10</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>10.5</button>
                                        <button className={`bg-transparent p-2 d-block text-black-50 fw-semibold border`} style={{width: '50px',height: '50px'}} onClick={(e)=> onclickhandler(e)}>11</button>
             
                                    </div>
                                    </div>
                                    <div className=' row gap-3 mt-3'>
                                        <div className=' col-12 col-md-2'>
                                            <select name="quantity" id="" className=' px-3 px-md-2 py-md-3 form-select rounded-0'>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                            </select>
                                        </div>
                                        <div className=' col-12 col-md-5'>
                                            <button className=' bg-black w-100 d-block px-2 py-3 px-md-5 py-md-3 text-white gap-2 border-0'>
                                                <small className=' fw-semibold'>Add To Cart</small> <i className=' bi bi-cart text-white'></i>
                                            </button>
                                        </div>
                                        <div className=' col-12 col-md-4'>
                                            <button className=' border border-black w-100 d-block bg-transparent px-4 py-3 '>Whishlist <i className=' bi bi-heart text-black'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' card-badge sh-badge bg-white text-uppercase text-black px-2'>New</div>
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={back1} className=' card-img-top img-back ' alt="" />
                                            <img src={front1} className=' card-img-top img-front' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        < AiOutlineEye className=' text-black-50' />
                                                    </button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Shoes</p>
                                        <div className=' fw-semibold text-black'>Leather mid-heel Sandals</div>
                                        <div className=' text-black-50 fw-bold'>$129.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={back2} className=' card-img-top img-back ' alt="" />
                                            <img src={front2} className=' card-img-top img-front' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Dresses</p>
                                        <div className=' fw-semibold text-black'>Cotton floral print Dress</div>
                                        <div className=' text-black-50 fw-bold'>$40.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                <div className=' card-badge sh-badge bg-black text-white text-uppercase px-2'>New</div>
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={back3} className=' card-img-top img-back ' alt="" />
                                            <img src={front3} className=' card-img-top img-front' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Shoes</p>
                                        <div className=' fw-semibold text-black'>Leather Sneakers</div>
                                        <div className=' text-black-50 fw-bold'> $85.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' card-badge sh-badge bg-white text-uppercase px-2 text-black'>New</div>
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={back4} className=' card-img-top img-back ' alt="" />
                                            <img src={front4} className=' card-img-top img-front' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Tops</p>
                                        <div className=' fw-semibold text-black'>Cropped cotton Top</div>
                                        <div className=' text-black-50 fw-bold'>$29.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' card-badge sh-badge bg-white text-uppercase px-2 text-black'>New</div>
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={back5} className=' card-img-top img-back ' alt="" />
                                            <img src={front5} className=' card-img-top img-front' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Dresses</p>
                                        <div className=' fw-semibold text-black'>Floral print midi Dress</div>
                                        <div className=' text-black-50 fw-bold'>$50.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' card-badge sh-badge bg-black text-white text-uppercase px-2'>New</div>
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={pro5} className=' card-img-top  ' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Bags</p>
                                        <div className=' fw-semibold text-black'>Suede cross body Bags</div>
                                        <div className=' text-black-50 fw-bold'>$49.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={pro6} className=' card-img-top  ' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Skirts</p>
                                        <div className=' fw-semibold text-black'>Printed A-line Skirt</div>
                                        <div className=' text-black-50 fw-bold'>$79.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="sh-card mb-7" >
                                    <div className=' sh-card-img position-relative'>
                                        <a href="#" className=' sh-card-img-hover d-block'>
                                            <img src={pro7} className=' card-img-top  ' alt="" />
                                            <div className=' sh-card-actions gap-2'>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">< AiOutlineEye className=' text-black-50' /></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><LuShoppingCart className=' text-black-50'/></button>
                                                </span>
                                                <span className=' sh-card-action'>
                                                    <button className=' btn-circle sh-btn-xs sh-btn-white-primary'><AiOutlineHeart className=' text-black-50'/></button>
                                                </span>
                                            </div>
                                        </a>
                                        
                                    </div>
                                    <div className=' sh-card-body'>
                                        <p className=' mt-3 text-black-50 mb-0'>Shoes</p>
                                        <div className=' fw-semibold text-black'>Heel strappy Sandals</div>
                                        <div className=' text-black-50 fw-bold'>$90.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"></div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"></div>
                </div>
                <div className="row">
                <div className="col">
                    <div className=' mt-7 text-center'>
                        <a href="#" className=' px-3 discover d-inline-block text-black position-relative fw-medium text-decoration-none'>Discover more</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    {/* countDown */}
    <section className='count'>
        <div className="container py-13 ">
            <div className=" d-flex justify-content-center justify-content-md-end">
                <div className="">
                    <div className=' d-flex flex-column gap-4 mb-7' style={{width :' 80%'}}>
                        <h2 className=''>Get -50% from
                            Summer Collection
                        </h2>
                        <div className=' d-flex mb-5'>
                            <div className=' text-center'>
                                <h1 className=' primary fw-bolder'>{day}</h1><span className=' fw-medium text-black-50'> Days</span>
                            </div>
                            <div className=' px-3'>
                                <h2 className=' primary fw-bolder align-self-center'>:</h2>
                            </div>
                            <div className=' text-center'>
                                <h1 className=' primary fw-bolder'>{hour}</h1><span className=' fw-medium text-black-50'> Hour</span>
                            </div>
                            <div className=' px-3'>
                                <h2 className=' primary fw-bolder'>:</h2>
                            </div>
                            <div className=' text-center'>
                                <h1 className=' primary fw-bolder'>{minute}</h1><span className=' fw-medium text-black-50'>Minutes</span>
                            </div>
                            <div className=' px-3'>
                                <h2 className=' primary fw-bolder'>:</h2>
                            </div>
                            <div className=' text-center'>
                                <h1 className=' primary fw-bolder'>{sec}</h1><span className=' fw-medium text-black-50'>Seconds</span>
                            </div>
                        </div>
                        
                        <div>
                            <Link to={'/shop'}>
                            <button className=' px-5 py-3 count-btn border-0 text-white'>Shop Now <i className=' bi bi-arrow-right ms-2 count-arrow d-inline-block '></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* review */}
    <section className=' py-12'>
        <div className="container">
            <div className="row justify-content-center">
                <div className=' mb-5 col-6 text-center'>
                    <p className=' text-black-50 fw-semibold'>WHAT BUYERS SAY</p>
                    <h3>Latest buyers Reviews</h3>
                </div>
            </div>
            <div className="row" style={{height : '500px'}}><Demo/></div>
        </div>
    </section>
    <section className=' py-12 bg-light'>
        <div className=' container'>
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1 className=' mb-3'>@shopper</h1>
                    <p className=' text-gray'>Appear, dry there darkness they're seas, dry waters.</p>
                </div>
            </div>
            <div className=" row justify-content-center">
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro10} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro11} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro12} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro13} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro14} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-6 mt-3 mt-sm-0 col-sm-3 col-md '>
                    <div className='position-relative shopper'>
                        <img src={pro15} className=' d-inline-block w-100' alt="" />
                        <div className=' position-absolute action w-100 h-100 top-0 d-flex align-items-center justify-content-center text-white'>
                            <div className=' d-flex overlay justify-center text-white align-items-center'>
                                <i className=' bi bi-heart fs-small'></i>
                                <span className=' fs-small mx-2'>248</span>
                                <i className="bi bi-chat-left fs-small"></i>
                                <span className=' fs-small ms-2'>7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" row mt-10">
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={mango} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={zara} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={reebok} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={asos} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={stradivarius} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={adidas} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
                <div className=' col-6 col-sm-3 col-md mt-3 mt-sm-0'>
                    <img src={bershka} className=' w-80' style={{lineHeight : '10px'}} alt="" />
                </div>
            </div>
        </div>
    </section> 
    </div>    
    </>

  )
}

export default HomePage