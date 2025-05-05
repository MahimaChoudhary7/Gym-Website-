<template>
    <div v-if="isVisible" class="register-overlay">
        <div class="register-form">
            <h2>Register for Resilient Fitness</h2>
            <form @submit.prevent="submitForm">
                <input type="text" v-model="form.name" placeholder="Full Name" required/>
                <input type="email" v-model="form.email" placeholder="Email Address" required>
                <input type="tel" v-model="form.phone" placeholder="Phone Number" required>
                <textarea v-model="form.goal" placeholder="Your Fitness Goal" rows="4"></textarea>
                <button type="submit" class="btn submit-btn">Submit</button>
                <button type="button" class="close-btn" @click="$emit('close')">Close</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistrationForm',
    props: ['isVisible'],
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                goal: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log("Form submitted:", this.form);
            alert("Thank you for registering!");
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.register-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.register-form {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
}

.register-form h2 {
    margin-bottom: 20px;
    color: #e0621e;
    text-align: center;
}

.register-form input, .register-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.submit-btn {
    background: #e0621e;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
}

.submit-btn:hover {
    background: #c24e15;
}

.close-btn {
    background: transparent;
    border: none;
    color: #555;
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>