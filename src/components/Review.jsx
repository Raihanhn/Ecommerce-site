import React from 'react'
import { useState } from 'react'
import Reviews from "./Reviews"
import { AiFillStar} from 'react-icons/ai';

const Review = () => {

    const [data, setData] = useState(Reviews);

  return (
    <div className='akeel'>
        <section className="review">
          <h1 className="heading">Customer <span>review</span></h1>
            <div className="box-container">

                {data.map((value) =>{
                  const {id, title, desc, image} = value;

                    return (
                        <>
                            <div className="box" key={id}>
                               <img src={image} alt="" />
                               <p> {desc} </p>
                               <h3> {title} </h3>
                                <div class="stars">
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                   <AiFillStar/>
                                </div>
                            </div>
                        </>
                    )
                })}
       
            </div>

        </section>
    </div>
  )
}

export default Review