<template>
  <div class="header">
      <div class="container-flex">
        <div class="text">
          <h1 class="mb">Complete Daily <br /><span>Workout</span> At Home</h1>
          <p class="mb">
            Physical fitness is not only one of the most important keys to a healthy body,<br class="desktop-break">it is the basis of dynamic and creative
            intellectual activity.
          </p>
          <a href="#" class="btn mt" @click.prevent="handleClick">Get Started Now</a>
        </div>
        <div class="visual">
          <img src="../assets/banner-img.png" alt="Workout banner" />
        </div>
      </div>
    </div>

    <Transition>
    <section id="get-started" class="get-started-section" v-if="showGetStarted" @click.self="showGetStarted=false">
      <div class="get-started-container">
        <div class="content-box">
          <button class="close-btn" @click="showGetStarted=false">&times;</button>
        <h2>Start your Fitness Journey</h2>
        <p>
          Whether you're a beginner or a seasoned athlete, Resilient Fitness is your partner in achieving your goals — right from the comfort of your home.
        </p>
        <ul class="features-list">
          <li><font-awesome-icon icon="dumbbell" class="icon"/>Daily Guided Workouts</li>
          <li><font-awesome-icon icon="apple-whole" class="icon"/>Personalized Diet Recommendations</li>
          <li><font-awesome-icon icon="users" class="icon"/>Join a Motivating Community</li>
          <li><font-awesome-icon icon="mobile-screen" class="icon"/>Track Progress on Any Device</li>
        </ul>
        <a href="#register" class="btn" @click.prevent="handleRegister">Register Now</a>
        <RegistrationForm :is-visible="showRegistrationForm" @close="showRegistrationForm = false"/>
      </div>
      </div>
    </section>
    </Transition>
</template>

<script>
import RegistrationForm from './RegistrationForm.vue';

export default {
  components: { RegistrationForm },
  name:'Hero',
  data() {
    return {
      showGetStarted: false,
      showRegistrationForm: false,
    };
  },
  methods: {
    handleClick() {
      this.showGetStarted = !this.showGetStarted;
    },
    handleRegister() {
      this.showRegistrationForm = true;
    },
  },
};
</script>

<style scoped>

.header {
  padding: 20px 0;
  overflow: hidden;
}

.header::after, .header::before {
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

.get-started-container {
  max-width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.get-started-section h2 {
  font-size: 40px;
  color: #333;
  margin-bottom: 20px;
}

.get-started-section p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.content-box {
  background: white;
  padding: 40px;
  border-radius: 8px;
  max-width: 700px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 30px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
}

.close-btn:hover {
  color: #333;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: center;
}

.features-list li {
  font-size: 18px;
  margin-bottom: 15px;
  color: #444;
}

.icon {
  margin-right: 10px;
  color: #e0621e;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.get-started-section .btn {
  background: #e0621e;
  color: white;
  padding: 14px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.3s ease;
}

.get-started-section .btn:hover {
  background: #cf5413;
}

@media (max-width: 768px) {

    .header .container-flex {
      flex-direction: column;
      text-align: center;
    }

    .text, .visual {
      width: 100%;
    }

    .header h1 {
      font-size: 33px;
      margin-top: 20px;
    }

    .header p {
      font-size: 13px;
      line-height: 1.4;
    }

    .visual img {
      width: 100%;
      margin-top: 20px;
    }

    .btn {
      margin-top: 10px;
      width: 70%;
      font-size: 14px;
      padding: 8px 16px;
    }
}

</style>