<template>
  <div class="features-section" id="features">
    <h2>Our Features</h2>
    <div class="features-grid">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <h3>{{ feature.icon }} {{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        { icon: '🏋️', title: 'State-of-the-Art Equipment', description: 'Experience the latest fitness technology with our premium workout machines and free weights designed for all fitness levels.' },
        { icon: '🧑‍🤝‍🧑', title: 'Personal Training', description: 'Achieve your goals faster with personalized workout plans and one-on-one sessions from certified trainers.' },
        { icon: '🧘', title: 'Group Fitness Classes', description: 'Join our dynamic group classes, including yoga, Zumba, HIIT, and strength training — suitable for all fitness enthusiasts.' },
        { icon: '🚿', title: 'Modern Amenities', description: 'Enjoy clean and spacious locker rooms, showers, and saunas, providing you with a comfortable post-workout experience.' },
        { icon: '🥗', title: 'Nutrition Guidance', description: 'Get expert advice on your diet with customized nutrition plans to complement your workout routines.' },
        { icon: '⏰', title: '24/7 Access', description: 'Work out whenever it suits you with our round-the-clock access, giving you the flexibility you need.' },
        { icon: '💪', title: 'Functional Training Zone', description: 'Enhance your performance with our dedicated functional training space equipped with battle ropes, kettlebells, and more.' },
        { icon: '🌐', title: 'Online Coaching', description: 'Can’t make it to the gym? Stay on track with virtual training and fitness consultations from our experts.' }
      ]
    };
  }
};
</script>

<style scoped>
.features-section {
  padding: 60px 10%;
  background-color: #f9f9f9;
}

h2 {
  font-size: 48px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

h3 {
  font-size: 24px;
  color: #e0621e;
}

p {
  font-size: 16px;
  color: #666;
  margin-top: 10px;
}

@media (max-width: 768px) {

  .features-section {
    padding: 30px 5%;
  }

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 19px;
    text-align: center;
  }
  p {
    font-size: 13px;
    text-align: justify;
  }
}
</style>