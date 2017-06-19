<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>Demo1 work with vue-router</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
