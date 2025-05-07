<template>
    <div class="contact">
      <div class="container">
        <div class="row">
          <div class="contact-left">
            <h1 class="sub-title">Contact Us</h1>
            <p><font-awesome-icon icon="phone" /> +911234567890</p>
            <div class="social-icons">
              <a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
              <a href="https://www.instagram.com/resilient_fitness1/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </div>
          </div>
              <div class="contact-right">
                <form>
                  <input v-model="name" placeholder="Your Name" required>
                  <input v-model="email" placeholder="Your Email" required>
                  <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                  <button type="submit" class="btn btn2">Submit</button>
                </form>
              </div>
        </div>
      </div>
    <div class="copyright">
      <p> &copy; Resilient Fitness. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>

.container {
    padding: 40px 10%;
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.sub-title {
    font-size: 60px;
    font-weight: 600;
    color: #fff;
}

.contact-left {
  flex-basis: 45%;
}

.contact-right {
  flex-basis: 50%;
}

.contact-left p {
  margin-top: 30px;
  color: #e0621e;
  font-size: 24px;
}

.social-icons {
  margin-top: 30px;
}

.social-icons a {
  text-decoration: none;
  font-size: 30px;
  margin-right: 15px;
  color: #ababab;
  display: inline-block;
  transition: transform 0.5s;
}

.social-icons a:hover {
  color: #e0621e;
  transform: translateY(-5px);
}

.btn .btn2 {
  display: inline-block;
  background: #e0621e;
}

.contact-right form {
  width: 100%;
}

form input, form textarea {
  width: 100%;
  border: 0;
  outline: none;
  background: #262626;
  padding: 15px;
  margin: 15px 0;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
}

form .btn2 {
  background: #262626;
  padding: 14px 60px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  border: 2px solid #e0621e;
}

form .btn2:hover {
  background: #e0621e;
}

.copyright {
  width: 100%;
  text-align: center;
  padding: 25px 0;
  background: #262626;
  font-weight: 300;
  margin-top: 20px;
  color: #fff;
}

@media (max-width: 768px) {
  .container {
    padding: 20px 5%;
  }

  .row {
    flex-direction: column;
  }

  .sub-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }

  .contact-left, .contact-right {
    flex-basis: 100%;
    margin-bottom: 30px;
  }

  .contact-left p {
    font-size: 18px;
    text-align: center;
  }

  .social-icons {
    text-align: center;
    margin-top: 20px;
  }

  .social-icons a {
    font-size: 24px;
    margin-right: 12px;
  }

  form input, form textarea {
    font-size: 16px;
    padding: 12px;
  }

  form .btn2 {
    font-size: 16px;
    padding: 12px 36px;
    display: block;
    margin: 20px auto 0;
  }

  .copyright {
    font-size: 14px;
    padding: 20px 10px;
  }
}

</style>
