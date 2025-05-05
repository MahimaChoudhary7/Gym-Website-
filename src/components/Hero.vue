<template>
  <div class="header">
      <div class="container-flex">
        <div class="text">
          <h1 class="mb">Complete Daily <br /><span>Workout</span> At Home</h1>
          <p class="mb">
            Physical fitness is not only one of the most important keys to a healthy body,<br class="desktop-break">it is the basis of dynamic and creative
            intellectual activity.
          </p>
          <a href="#features" class="btn mt" @click.prevent="handleClick">Get Started Now</a>
        </div>
        <div class="visual">
          <img src="../assets/banner-img.png" alt="Workout banner" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'Hero',
  methods: {
    handleClick() {
      console.log('Get Started button clicked!')
    }
  }
};
</script>

<style scoped>

.header {
  padding: 20px 0;
  overflow: hidden;
}

.header::after, .header::before {
  content: "";
  background: url(https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/blur-1.png);
  position: absolute;
  width: 400px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
}

.header::after {
  left: -200px;
}

.header::before {
  right: -200px;
}

.header .container-flex {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mb {
  margin-bottom: 30px;
}
.mt {
  margin-top: 20px;
}

.text {
  width: 60%;
}

.visual {
  width: 40%;
}

.visual img {
  width: 100%;
}

.header h1 {
  font-size: 70px;
  font-weight: 600;
}

.header h1 span {
  color: var(--clr-primary);
}

.btn {
  padding: 10px 28px;
  background: var(--clr-primary);
  border-radius: 40px;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

.btn:hover {
  transition: 0.3s linear;
  box-shadow: var(--clr-primary) 0px 5px 15px;
}

@media (max-width: 768px) {
    .header h1 {
      font-size: 35px;
    }

    .header p {
      font-size: 10px;
    }

    .visual img {
      width: 130%;
    }

    .btn {
      margin-top: 5px;
      width: 65%;
      font-size: 10px;
      padding: 5px 14px;
    }
}

</style>