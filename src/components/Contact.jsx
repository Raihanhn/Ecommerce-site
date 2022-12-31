import React from 'react'

const Contact = () => {
  return (
    <div className='akeel'>
         <section className="contact">
          <h1 className="heading">Contact <span>us</span></h1>

          <div className="contact-box">
            <form action="#">
                <input type="text" className='input-field' placeholder='your name' />
                <input type="text" className='input-field' placeholder='your email' />
                <input type="text" className='input-field' placeholder='subject' />
                <textarea type="text" className='input-field textarea-field' placeholder='your message'></textarea>
                <button type='button' className='btn' >send message</button>
            </form>
          </div>
        </section>
    </div>
  )
}

export default Contact