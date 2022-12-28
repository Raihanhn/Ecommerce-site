import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiGlobe } from 'react-icons/ci';

const Home = () => {
  return (
    <div className='akeel'>
        <section className="home">
      <div className="content">
      <h3>Eshop <span>online shopping</span> 2022</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum quis, cupiditate eius fuga unde asperiores assumenda perspiciatis. Aliquam, hic!</p>
      <a href="#" className='mybtn'>Read more</a>
      </div>
    </section>

    <section className="about" id="about">
    <h1 className="heading">brief <span>about</span> us</h1>
    <div className="box-container">
        <div className="box">
             <AiOutlineShoppingCart className='iconic' />
            <h3>amazing unique products</h3>
            <p>Lorem ipsum dolor sit amet,nostrum placeholder text commonly nisi maxime obcaecati.</p>
            <a href="#" class="mbtn">read more</a>
        </div>
        
         <div class="box">
             <TbTruckDelivery className='iconic' />
            <h3>fast & free delivery</h3>
            <p>Lorem ipsum dolor sit amet,nostrum placeholder text commonly nisi maxime obcaecati.</p>
            <a href="#" class="mbtn">read more</a>
        </div>
        
         <div class="box">
             <MdOutlinePayment className='iconic' />
            <h3>easy payments</h3>
            <p>Lorem ipsum dolor sit amet,nostrum nisi maxime placeholder text commonly obcaecati.</p>
            <a href="#" class="mbtn">read more</a>
        </div>

        <div class="box">
              <CiGlobe className='iconic' />
            <h3>worldwide service</h3>
            <p>Lorem ipsum dolor sit amet,nostrum nisi maxime placeholder text commonly obcaecati.</p>
            <a href="#" class="mbtn">read more</a>
        </div>
        
    </div>
    
</section>


    </div>
  )
}

export default Home