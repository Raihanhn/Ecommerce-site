import React from 'react'
import { useState } from 'react'
import products from './Products'

const Product = () => {

  const [data, setData] = useState(products);

  return (
    <div className='akeel'>
         <section className="product">
            <h1 className="heading"> our <span>products</span> </h1>
            <div className="box-container">
            {data.map((value) =>{
                const {id, title, desc, bttn, image} = value;

                return (
                    <>
                        <div className="box" key={id}>
                          <img src={image} alt="" />
                         <h3> {title} </h3>
                          <p>{desc}</p>
                          <a href="#" className='mybtns'> {bttn} </a>
                        </div>
                    </>
                )
            })}
            </div>
        </section>
    </div>
  )
}

export default Product