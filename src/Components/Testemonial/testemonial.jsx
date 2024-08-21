import React from 'react'
import './testemonial.css';
import AVTR1 from '../../Assets/avatar1.jpg';
import AVTR2 from '../../Assets/avatar2.jpg';
import AVTR3 from '../../Assets/avatar3.jpg';
import AVTR4 from '../../Assets/avatar4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name:'John Cena',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto laborum alias, mollitia dolorum cum. Dolor ipsum eveniet voluptatem repellat mollitia commodi distinctio, sed sapiente illum amet fugiat fugit ex'
  },
  {
    avatar: AVTR2,
    name:'Charuni Madushika',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto laborum alias, mollitia dolorum cum. Dolor ipsum eveniet voluptatem repellat mollitia commodi distinctio, sed sapiente illum amet fugiat fugit ex'
  },
  {
    avatar: AVTR3,
    name:'Ayomi Lakshika',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto laborum alias, mollitia dolorum cum. Dolor ipsum eveniet voluptatem repellat mollitia commodi distinctio, sed sapiente illum amet fugiat fugit ex'
  },
  {
    avatar: AVTR4,
    name:'Muthuhari Nisansala',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto laborum alias, mollitia dolorum cum. Dolor ipsum eveniet voluptatem repellat mollitia commodi distinctio, sed sapiente illum amet fugiat fugit ex'
  }
]

const testemonial = () => {
  return (
    <section id='testermonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testemonial