<script>
export default {
  name: 'ExploreSection'
};
</script>

<template>
  <div class="section" id="explore">
    <div class="container flex">
      <div class="visual">
        <img decoding="async" src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg" alt="Explore Our Fitness Studio" />
      </div>
      <div class="text">
        <h2 class="primary mb">
          Discover Your Strength <br />
          at Our Fitness Studio
        </h2>
        <p class="tertiary mb">
          Step into a world of possibilities at our state-of-the-art fitness center.
          Whether you’re a beginner or a seasoned athlete, we offer top-tier equipment,
          expert trainers, and dynamic classes designed to inspire and challenge you.
          Achieve your fitness goals in an environment that motivates you to be your best.
        </p>
        <ul class="benefits">
          <li>✅ Premium Equipment and Facilities</li>
          <li>✅ Certified Personal Trainers</li>
          <li>✅ Exciting Group Classes</li>
          <li>✅ Relaxing Recovery Amenities</li>
        </ul>
        <a href="#" class="btn mt">Join Us Today</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding: 80px 10%;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.visual img {
  width: 500px;
  border-radius: 20px;
}

.text {
  max-width: 600px;
}

.primary {
  font-size: 48px;
  color: #333;
}

.tertiary {
  font-size: 18px;
  color: #555;
}

.benefits li {
  list-style: none;
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
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
}

.btn:hover {
  background-color: #d4531b;
}

.mt {
  margin-top: 20px;
}
.mb {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .section {
    padding: 50px;
  }
  .visual img {
    width: 300px;
    margin-top: -30px;
  }

  .primary {
    margin-top: 20px;
    font-size: 28px;
  }

  .tertiary {
    font-size: 14px;
    text-align: justify;
  }

  .benefits li {
    font-size: 10px;
    margin-bottom: 10px;
  }

  .btn {
    padding: 7px 14px;
    font-size: 10px;
  }
}
</style>