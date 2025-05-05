<script>
export default {
  name: 'TrainerSection',
  data() {
    return {
      trainers: [
        { name: 'Alan Smith', image: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg', description: 'Certified personal trainer specializing in strength training and conditioning.' },
        { name: 'Jessica Lee', image: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg', description: 'Experienced yoga and mindfulness instructor for all levels.' },
        { name: 'Michael Johnson', image: 'https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg', description: 'Expert in HIIT and functional fitness training with 10 years of experience.' }
      ]
    };
  }
};
</script>

<template>
  <div class="section">
    <h2 class="primary mb">Our Professional Trainers</h2>
    <div class="container flex">
      <div class="trainer" v-for="(trainer, index) in trainers" :key="index">
        <img :src="trainer.image" :alt="trainer.name" decoding="async" />
        <h3 class="secondary mb">{{ trainer.name }}</h3>
        <p class="tertiary mb">{{ trainer.description }}</p>
        <a href="#" class="btn-2">Learn More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding: 60px 10%;
  background-color: #f9f9f9;
}

h2 {
  font-size: 48px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.trainer {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.trainer img {
  width: 100%;
  border-radius: 12px 12px 0 0;
}

h3 {
  font-size: 24px;
  color: #e0621e;
  margin-top: 20px;
}

p {
  font-size: 16px;
  color: #666;
}

.btn-2 {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #e0621e;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
}

.btn-2:hover {
  background-color: #d14e16;
}

@media (max-width: 768px) {
  .section {
    padding: 30px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  h3 {
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
  }

  .btn-2 {
    margin-top: 10px;
    padding: 6px 12px;
    font-size: 10px;
  }
}
</style>