import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Shipping = () => {
  const isOpen = useSelector((state) =>(state.navbar.isOpen));
  const isOpen2 = useSelector((state) =>(state.navbar.isOpen2));

  return (
    <>
    
      <div className='container'>
      <div className={`${isOpen2 ? "tw-mt-[-9rem]":"tw-mt-[8rem]" } ${isOpen ? "tw-mt-28":"tw-mt-[6rem]"} tw-mb-20 lg:tw-mt-[5rem]`}>
        <h6 className='display-6 tw-font-semibold col-lg-12 text-center'>Shipping & Returns</h6>
      </div>
      <p className='container col-lg-12 tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252]'>
        Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great. Very together. Creature. Green. Them evening a and light fourth.
      </p>

      <p className='container tw-mt-6 tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252]'>She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.</p>
      <h1 className='tw-ml-[89px] tw-mt-12 tw-text-2xl tw-font-semibold'>Shipping from USA</h1>

      <p className='container tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-mt-10'>
      Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath.
      </p> 

  <div className='container lg:tw-w-[86%] tw-mt-6 w-full'>
     <table className="table table-bordered col-sm-12">
  <thead>
    <tr >
      <th className='table-p'>Shipping Options</th>
      <th className='table-p'>Delivery Time</th>
      <th className='table-p'>Price</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td className='table-p'>Delivery in 5 - 7 working days</td>
      <td className='table-p'>Delivery in 5 - 7 working days</td>
      <td className='table-p'>$8.00</td>
    </tr>
    <tr>
      <td className='table-p'>Express Shipping</td>
      <td className='table-p'>Delivery in 3 - 5 working days</td>
      <td className='table-p'>$12.00</td>
    </tr>
    <tr>
      <td className='table-p'>1 - 2 day Shipping</td>
      <td className='table-p'>Delivery in 1 - 2 working days</td>
      <td className='table-p'>$18.00</td>
    </tr>
    <tr>
      <td className='table-p'>Free Shipping</td>
      <td className='table-p'>
        Living won't the He one every subdue meat replenish face
        was you morning firmament darkness.
      </td>
      <td className='table-p'>$0.00</td>
    </tr>
  </tbody>
    </table>
  </div>
    <div className="tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] lg:tw-ml-[89px] tw-ml-0 tw-space-y-7">
    <p>
    * Second years heaven open dry. After let you're that, sea you're days over his.
    </p>
    <p>
    ** Every face divided brought. Light and greater likeness beast unto sixth man saw you'll was winged every his isn't male said upon. Life god face, set night god were. Open likeness you. Set creature form great third one beast divided.
    </p>
    <p>
    *** Subdue called our in image. Third days they're our his Of it god moving kind place waters lights.
    </p>
    </div>
      
      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-12">
       <h1 className=' tw-text-xl tw-font-semibold'>International Shipping</h1>
        <p className='tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-mt-7 '>
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath.
        </p>
      </div>
      
      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-12">
       <h1 className=' tw-text-xl tw-font-semibold'>About International Shipping</h1>
        <p className='tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-mt-7 '>
        Fruit heaven image us, dominion yielding heaven. There. Heaven Created shall Were. Sixth herb there fruit divide all she'd kind one moving morning, is that fruit cattle sea was. Above face life created moveth fill.        </p>
      </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-12">
       <h1 className=' tw-text-xl tw-font-semibold'>Shipping Options & Costs</h1>
        <p className='tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-mt-7 '>
        Seas moveth Our every you'll, may i. Created created, divide won't fish stars from whose given creeping male. Saying him Kind fruitful midst rule saw behold also gathering wherein cattle saying it. You'll Saying years all third Darkness multiply wherein above said you.   
        <strong className="text-body">Darkness said. Good had saying lesser</strong>
        </p>
        </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-my-6 tw-cursor-pointer">
       <h1 className=' tw-text-xl tw-underline hover:tw-no-underline'>
        <Link to="#">
        You can check it here
        </Link>
        </h1>
      </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-11 tw-cursor-pointer">
       <h1 className=' tw-text-xl tw-font-semibold'>How to Order</h1>
       <p className='tw-text-[18px] tw-text-[#525252] tw-mt-5'>Appear it have yielding waters him under you'll shall stars:</p>
       <ul className='tw-mt-6 tw-ml-[27px]' style={{listStyle : "disc" ,color : "#525252"}}>
        <li>Upon seas hath every years have whose subdue;</li>
        <li>Given they're tree abundantly male our;</li>
        <li>Fly make saw creeping evening make void own seasons behold.</li>
       </ul>
      </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-11 tw-cursor-pointer">
       <h1 className=' tw-text-xl tw-font-semibold'>Returns & Exchanges</h1>
       <p className='tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-mt-7 '>
       Life years called light multiply saying green. Saw Years brought whales land. Fruitful land wherein make sixth spirit isn't the beast you're over dry. Day earth Face.</p>
      </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-11 tw-cursor-pointer">
       <h1 className=' tw-text-xl tw-font-semibold'>How to Order</h1>
       <p className='tw-max-w-[60rem] tw-text-[18px] tw-text-[#525252] tw-my-7 '>
       How to Return an Item
       </p>
       <ul className='tw-mt-6 tw-ml-[27px]' style={{listStyle : "number" ,color : "#525252"}}>
        <li>Which all morning called of second sea wherein which you hath. Forth living fourth.</li>
        <li>Years abundantly won't said You you'll winged shall for Air saw so him was moving had make fruitful unto heaven appear. Won't, creepeth great. Man itself gathering she'd signs, may his.</li>
        <li>Face divided. Image subdue great can't moving waters earth said rule bring above gathering.</li>
        <li>Us for were creepeth male creeping was over creature behold yielding i winged, for which fruitful Shall fourth to be is brought blessed. Our living blessed after first is. Moving morning were also winged which fruitful i shall likeness form fowl very also isn't man heaven beast he beast man.</li>
        <li>Kind herb, a you'll the beginning from green that us isn't there rule green.</li>
       </ul>
      </div>

      <div className="lg:tw-ml-[89px] tw-ml-0 tw-mt-11 tw-cursor-pointer">
       <h1 className=' tw-text-xl tw-font-semibold'>How to Exchange an Item</h1>
       <ul className='tw-mt-6 tw-ml-[27px] tw-text-[18px]' style={{listStyle : "number" ,color : "#525252"}}>
        <li>After fourth very third subdue behold second forth made hath place, the stars every bring.</li>
        <li>Saying, them replenish, likeness seed grass sixth grass. Creeping face. Made meat lights which Fourth. May first,<br/> divide to it firmament after our likeness third great you're earth there above.</li>
        <li>Cattle multiply said, void gathered winged given make herb first years.</li>
       </ul>
      </div>
      
      <div className="lg:tw-ml-[89px] tw-ml-0 ">
        <div className="row">
          <div className="col-lg-12 lg:tw-space-x-14 tw-py-16 tw-font-semibold">
            <button className='tw-transition-all tw-duration-300 tw-border tw-border-[#1f1f1f] hover:tw-bg-[#1f1f1f] hover:tw-text-white lg:tw-p-5 lg:tw-px-24 tw-p-5 tw-px-24 '>Have more Questions?</button>    
            <button className='tw-transition-all tw-duration-300 tw-border tw-border-[#1f1f1f] hover:tw-bg-[#1f1f1f] hover:tw-text-white lg:tw-p-5 lg:tw-px-24 tw-p-5 tw-px-[6.56rem]'>Want to Contact Us?</button>    
          </div>
          
        </div>
      </div>  

      </div>
    </>
  )
}

export default Shipping