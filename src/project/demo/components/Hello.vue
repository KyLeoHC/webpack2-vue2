<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>Demo1 work with vue-router</div>
        <div style="color: red;font-size: 18px;"
             @click="onClick">
            {{info}}
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            info: {
                type: String
            }
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        methods: {
            onClick() {
                this.$emit('update:info', 'change info');
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    h1, h2
        color: #ff8e8e
</style>
