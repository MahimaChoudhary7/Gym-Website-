<template>
  <div class="menu">
        <div class="container-flex">
            <div class="logo">
                <img src="@/assets/logo.png" alt="Logo"></img>
            </div>
            <ul class="nav">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#features">Features</a></li>
                <li class="nav-item"><a href="#explore">Explore</a></li>
                <li class="nav-item"><a href="#">Register</a></li>
            </ul>
            <a href="#" class="btn">Register</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.menu {
    width: 100%;
    padding: 12px 0;
    background: #fff;
}

.menu .container-flex {
    justify-content: space-between;
}

.logo {
    cursor: pointer;
}

.logo img {
    width: 80px;
    height: auto;
}

.nav {
    list-style: none;
}

.nav-item {
    display: inline-block;
    margin-right: 100px;
    font-size: 28px;
    font-weight: 400;
}

.nav-item a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
}

.nav-item:hover a {
    color: #e0621e;
    transition: 0.3s linear;
}

.nav-item:last-of-type {
    margin-right: 0;
}

.btn {
  color: #333;
  text-decoration: none;
  display: block;
  margin: 30px auto;
  width: fit-content;
  border: 2px solid #e0621e;
  padding: 10px 15px;
  border-radius: 25px;
  transition: background 0.5s;
  font-size: larger;
}

.btn:hover {
  background: #e0621e;
}
</style>
