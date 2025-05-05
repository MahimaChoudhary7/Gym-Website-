<template>
  <div class="menu">
        <div class="container-flex">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Logo">
                <span class="text">RESILIENT FITNESS</span>
            </div>
            <ul :class="['nav', { active: isMobileMenuOpen }]">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#features">Features</a></li>
                <li class="nav-item"><a href="#explore">Explore</a></li>
                <li class="nav-item"><a href="#register" @click.prevent="handleRegister">Register</a></li>
                <a href="#" class="btn" @click.prevent="handleRegister">Register</a>
            </ul>
            <div class="mobile-btn" @click="toggleMobileMenu"><font-awesome-icon :icon="isMobileMenuOpen ? ['fas', 'xmark'] : ['fas', 'bars']" /></div>
        </div>
        <RegistrationForm :is-visible="showRegistrationForm" @close="showRegistrationForm = false"/>
    </div>
</template>

<script>
import RegistrationForm from './RegistrationForm.vue';
export default {
    components: { RegistrationForm },
    name: 'Navbar',
    data() {
        return {
            isMobileMenuOpen: false,
            showRegistrationForm: false
        };
     },
     methods: {
        handleRegister() {
            this.showRegistrationForm= true;
        },
        toggleMobileMenu() {
            this.isMobileMenuOpen= !this.isMobileMenuOpen;
        }
    }
};
</script>

<style scoped>
.menu {
    width: 100%;
    padding: 5px 0;
    background: #fff;
}

.container-flex {
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
}

.logo img {
    display: block;
    width: 50px;
}

.text{
    font-size: 20px;
    font-weight: 700;
    color: #333;
    display: flex;
    align-items: center;
    line-height: 1;
}

.nav {
    list-style: none;
    display: flex;
    gap: 60px;
    align-items: center;
}

.nav-item a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 16px;
}

.nav-item:hover a {
    color: #e0621e;
}

.btn {
  color: #333;
  text-decoration: none;
  border: 2px solid #e0621e;
  padding: 10px 15px;
  border-radius: 25px;
  transition: background 0.5s;
  font-size: 16px;
}

.btn:hover {
  background: #e0621e;
  color: #fff;
}

.mobile-btn {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: #e0621e;
}

@media (max-width: 768px) {
    .text {
        font-size: 16px;
    }
    .mobile-btn {
        display: block;
    }

    .nav {
        display: none;
        flex-direction: column;
        width: 100%;
        background: #fff;
        padding: 20px;
        margin-top: 10px;
    }

    .nav.active {
        display: flex;
    }

    .btn {
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }
}
</style>
