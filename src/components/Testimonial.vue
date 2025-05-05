<script>
import Discount from './Discount.vue';

export default {
  name: 'TestimonialSection',
  components: {
        Discount,
      },

  data() {
    return {
      testimonial: {
        clientName: 'Excellent Training',
        feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas voluptatem ad, repudiandae voluptates odio deleniti reiciendis in veniam quidem expedita maxime error fugit. Pariatur quasi sunt aut id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, officiis.',
        clientImage: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg',
        testimonialImage: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png'
      }
    };
  }
};
</script>

<template>
  <div class="section" id="testimonial">
    <div class="container flex">
      <div class="text">
        <h2 class="primary">
          That's What Our Super <br />
          Client Says
        </h2>
        <div class="client">
          <img :src="testimonial.clientImage" alt="Client" />
          <h2 class="secondary">{{ testimonial.clientName }}</h2>
          <p class="tertiary">{{ testimonial.feedback }}</p>
        </div>
      </div>
      <div class="visual">
        <img :src="testimonial.testimonialImage" alt="Testimonial" />
      </div>
    </div>
    <Discount/>
  </div>
</template>

<style scoped>
.section {
  padding: 80px 10%;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  flex-basis: 50%;
}

.visual img {
  max-width: 100%;
}

.primary {
  font-size: 48px;
  color: #333;
}

.secondary {
  font-size: 28px;
  color: #e0621e;
}

.tertiary {
  font-size: 16px;
  color: #666;
}

.client img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

@media (max-width: 768px) {

  .section {
    padding: 40px;
  }
  .primary {
    font-size: 24px;
  }

  .client img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .visual img {
    max-width: 80%;
    margin-left: 50px;
  }

  .secondary {
    font-size: 14px;
  }

  .tertiary {
    font-size: 10px;
    text-align: justify;
  }
}
</style>