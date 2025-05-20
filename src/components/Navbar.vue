<template>
  <div class="menu">
        <div class="container-flex">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Logo">
                <span class="text">RESILIENT FITNESS</span>
            </div>
            <div class="nav-container" :class="{ active: isMobileMenuOpen }">
                <div class="logo-container">
                    <img src="@/assets/logo.png" alt="Logo">
                </div>
             <ul class="nav">
                <li class="nav-item"><a href="#home" @click="handleNavClick">Home</a></li>
                <li class="nav-item"><a href="#features" @click="handleNavClick">Features</a></li>
                <li class="nav-item"><a href="#explore" @click="handleNavClick">Explore</a></li>
                <li class="nav-item"><a href="#register" @click.prevent="handleRegister">Register</a></li>
                <a href="#" class="btn" @click.prevent="handleRegister">Register</a>
             </ul>
            </div>
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
            this.isMobileMenuOpen= false;
        },
        toggleMobileMenu() {
            this.isMobileMenuOpen= !this.isMobileMenuOpen;
        },
        handleNavClick() {
            this.isMobileMenuOpen= false;
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
    .container-flex {
        margin: 5px 5px;
    }

    .text {
        font-size: 16px;
    }

    .mobile-btn {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 1001;
        font-size: 24px;
        cursor: pointer;
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        right: -100%;
        width: 60%;
        height: 100vh;
        background-color: #fff;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
        transition: right 0.3s ease-in-out;
        z-index: 1000;
        padding-top: 60px;
    }

    .nav-container.active {
        right: 0;
    }

    .nav-container.logo-container img{
        max-width: 100%;
        cursor: pointer;
    }

    .nav {
        margin-top: 20px;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
    }

    .btn {
        margin-top: 10px;
        width: 100%;
        text-align: center;
    }
}
</style>
