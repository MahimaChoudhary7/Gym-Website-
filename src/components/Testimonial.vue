<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import Discount from './Discount.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  name: 'TestimonialSection',
  components: {
        Swiper,
        SwiperSlide,
        Discount,
      },

  data() {
    return {
      modules: [ Pagination, Navigation ],
      testimonials: [
        {
          clientName: 'John Doe',
          feedback: 'Amazing workout programs! I’ve never felt stronger.',
          clientImage: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg',
        },
        {
          clientName: 'Jane Smith',
          feedback: 'The trainers here are very supportive and professional!',
          clientImage: 'https://images.unsplash.com/photo-1571388072750-31a921b3d900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwY2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          clientName: 'Mike Johnson',
          feedback: 'Great environment and modern equipment. Highly recommend.',
          clientImage: 'https://images.unsplash.com/photo-1734668472056-b3383673172d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bSUyMGNsaWVudHN8ZW58MHx8MHx8fDA%3D',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="section" id="testimonial">
    <div class="testimonial-heading">
        <h2 class="primary">
          That's What Our Super <br />Client Says
        </h2>
    </div>

    <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    :loop="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 2 }
    }"
    class="testimonial-swiper">

    <swiper-slide v-for="(item,index) in testimonials" :key="index">
      <div class="testimonial-card">
        <img class="client-img" :src="item.clientImage" alt="Client"/>
        <h2 class="secondary">{{ item.clientName }}</h2>
        <p class="tertiary">{{ item.feedback }}</p>
      </div>
    </swiper-slide>
    </swiper>
    <Discount/>
  </div>
</template>

<style scoped>
.section {
  padding: 80px 10%;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonial-heading {
  margin-bottom: 40px;
}

.primary {
  font-size: 42px;
  color: #333;
}

.testimonial-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.client-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
}

.secondary {
  font-size: 20px;
  font-weight: bold;
  color: #e0621e;
  margin-bottom: 10px;
}

.tertiary {
  font-size: 16px;
  color: #666;
  text-align: justify;
  padding: 0 10px;
}

.testimonial-swiper {
  position: relative;
  padding: 40px 40px 40px;
}

@media (max-width: 768px) {

  .primary {
    font-size: 27px;
    margin-top: -40px;
    margin-bottom: -30px;
  }

  .client-img {
    width: 60px;
    height: 60px;
  }

  .secondary {
    font-size: 16px;
  }

  .tertiary {
    font-size: 14px;
  }
}
</style>