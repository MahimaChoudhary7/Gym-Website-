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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
            minus praesentium est et veniam voluptate alias excepturi minima
            placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum,
            explicabo eaque obcaecati.
          </p>
          <a href="#" class="btn bt">Book Now</a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Discount",
  };
</script>

<style scoped>
  #discount {
    padding: 40px 0;
  }

  .section {
  padding: 80px 10%;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.btn:hover {
  background-color: #d4531b;
}
</style>
