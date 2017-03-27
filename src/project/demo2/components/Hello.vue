<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>Demo2 work without vue-router</div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App --- 2'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-weight: normal;
        color: green;
    }
</style>
