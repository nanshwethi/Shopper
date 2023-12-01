import { Carousel } from '@mantine/carousel';
import tshirt from '../img/tshirt.jpg'
import pro8 from '../img/product-8.jpg'
import front3 from '../img/front3.jpg'
import front5 from '../img/front5.jpg'

function Demo() {
  return (
    <Carousel
      withIndicators
      height={400}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      styles={{
        indicator : {
            backgroundColor : '#898DB7',
            width : '8px',
            height : '8px',
            '&[data-active]': {
                backgroundColor: '#ff6f61',
            },
            '&[type]': {
                backgroundColor: '#898DB7',
            },
        },
        indicators : {
            marginTop : '50px'
        },
        controls :{
            display : 'none'
        },
        viewport : {
            width : '90%',
            margin : 'auto'
        },
        
      }}
      slidesToScroll={1}
    >
      <Carousel.Slide draggable='true'>
        <div className=" review-card"  >
                <div className=' border p-5 '>
                    <div className=' d-flex gap-3'>
                        <img src={tshirt} alt="" width={'60px'} height={'60px'}/>
                        <div>
                            <p className=' mb-0'>T-shirts</p>
                            <p className=' mb-0 fw-medium'>Oversized printed T-shirt</p>
                            <div className=' d-flex '>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star text-black-50'></i>
                            </div>
                        </div>
                    </div>
                    <blockquote className=' mb-0'>
                        <p className=' text-black-50 mt-4'>From creepeth said moved given divide make multiply of him shall itself also above second doesn't unto created saying land herb sea midst night wherein.</p>
                        <footer>
                        <p className=' small fw-medium text-black-50 mb-0'> Darrell Baker,18 May 2019</p>
                        </footer>
                    </blockquote>
                </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className=" review-card"  >
                <div className=' border p-5 '>
                    <div className=' d-flex gap-3'>
                        <img src={pro8} alt="" width={'60px'} height={'60px'}/>
                        <div>
                            <p className=' mb-0'>T-shirts</p>
                            <p className=' mb-0 fw-medium'>Oversized printed T-shirt</p>
                            <div className=' d-flex '>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star text-black-50'></i>
                                <i className=' bi bi-star text-black-50'></i>
                                <i className=' bi bi-star text-black-50'></i>
                                <i className=' bi bi-star text-black-50'></i>
                                
                            </div>
                        </div>
                    </div>
                    <blockquote className=' mb-0'>
                        <p className=' text-black-50 mt-4'>From creepeth said created saying cond doesn't unto created saying land herb sea midst night wherein.</p>
                        <footer>
                        <p className=' small fw-medium text-black-50 mb-0'> Darrell Baker,18 May 2019</p>
                        </footer>
                    </blockquote>
                </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide draggable='true'>
        <div className=" review-card"  >
                <div className=' border p-5 '>
                    <div className=' d-flex gap-3'>
                        <img src={front3} alt="" width={'60px'} height={'60px'}/>
                        <div>
                            <p className=' mb-0'>T-shirts</p>
                            <p className=' mb-0 fw-medium'>Oversized printed T-shirt</p>
                            <div className=' d-flex '>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star text-black-50'></i>
                            </div>
                        </div>
                    </div>
                    <blockquote className=' mb-0'>
                        <p className=' text-black-50 mt-4'>From creepeth said moved given divide make multiply of him shall itself also above second doesn't unto created saying land herb sea midst night wherein.</p>
                        <footer>
                        <p className=' small fw-medium text-black-50 mb-0'> Darrell Baker,18 May 2019</p>
                        </footer>
                    </blockquote>
                </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className=" review-card"  >
                <div className=' border p-5 '>
                    <div className=' d-flex gap-3'>
                        <img src={front5} alt="" width={'60px'} height={'60px'}/>
                        <div>
                            <p className=' mb-0'>T-shirts</p>
                            <p className=' mb-0 fw-medium'>Oversized printed T-shirt</p>
                            <div className=' d-flex '>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star-fill text-warning'></i>
                                <i className=' bi bi-star text-black-50'></i>
                            </div>
                        </div>
                    </div>
                    <blockquote className=' mb-0'>
                        <p className=' text-black-50 mt-4'>From creepeth said created saying cond doesn't unto created saying land herb sea midst night wherein.</p>
                        <footer>
                        <p className=' small fw-medium text-black-50 mb-0'> Darrell Baker,18 May 2019</p>
                        </footer>
                    </blockquote>
                </div>
        </div>
      </Carousel.Slide>
      
    </Carousel>
  );
}

export default Demo