<template>
    <div class="section" id="discount">
      <div class="container flex">
        <div class="visual">
          <img
            decoding="async"
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
            alt="Discount"
          />
        </div>
        <div class="text">
          <h2 class="primary mb">
            Fitness Classes This Summer, Pay Now And Get 25% Discount
          </h2>
          <p class="tertiary mb">
            Enroll today and experience top-tier fitness sessions with professional trainers. Limited time summer offer!
          </p>
          <ul class="features-list">
            <li>✔️ Free Nutrition Consultation</li>
            <li>✔️ Unlimited Access to All Classes</li>
            <li>✔️ Customized Training Plans</li>
            <li>✔️ Access to Sauna and Spa</li>
          </ul>
          <a href="#" class="btn bt" @click.prevent="showBooking = !showBooking">{{ showBooking ? 'Hide' : 'Book Now' }}</a>
          <div v-if="showBooking" class="booking-info">
            <h3>Ready to Join?</h3>
            <p>Fill out the form on our website or call us at <strong>+911234567890</strong> to reserve your spot. Offer valid until <strong>June 30</strong>. You can also visit us at our nearest center for an instant registration and free demo class.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Discount",
    data() {
      return {
        showBooking: false
      };
    }
  };
</script>

<style scoped>
  #discount {
    padding: 30px 0;
  }

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -40px;
}

  .visual img {
    max-width: 100%;
  }

  .text {
  flex-basis: 50%;
}

.primary {
  font-size: 48px;
  color: #333;
}

.tertiary {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
}

.features-list {
  margin-top: 20px;
  padding-left: 20px;
  color: #444;
}

.features-list li {
  margin-bottom: 8px;
  font-size: 15px;
  list-style: none;
}

.btn {
  display: inline-block;
  background-color: #e0621e;
  color: #fff;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-top: 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #d4531b;
}

.booking-info {
  background-color: #fff6ee;
  padding: 20px;
  margin-top: 20px;
  border-left: 5px solid #e0621e;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: start;
  }

  .visual {
    width: 100%;
    margin-bottom: 30px;
  }

  .primary {
    font-size: 27px;
    margin-bottom: 20px;
  }

  .tertiary {
    font-size: 14px;
    text-align: justify;
  }

  .btn {
    font-size: 10px;
    padding: 7px 14px;
  }

  .features-list li {
    font-size: 13px;
  }
}
</style>
