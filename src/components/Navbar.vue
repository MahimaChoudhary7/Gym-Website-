<template>
  <div class="menu">
        <div class="container-flex">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Logo">
            </div>
            <ul :class="['nav', { active: isMobileMenuOpen }]">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#features">Features</a></li>
                <li class="nav-item"><a href="#explore">Explore</a></li>
                <li class="nav-item"><a href="#register">Register</a></li>
                <a href="#" class="btn" @click.prevent="handleRegister">Register</a>
            </ul>
            <div class="mobile-btn" @click="toggleMobileMenu"><font-awesome-icon :icon="isMobileMenuOpen ? 'Xmark' : 'bars'" /></div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Navbar',
  data() {
    return {
        isMobileMenuOpen: false
    };
  },
  methods: {
        handleRegister() {
            console.log("Registration Successfull!");
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

.logo img {
    width: 50px;
    cursor: pointer;
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
