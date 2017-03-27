<template>
    <span class="detail">message: {{msg}}</span>
</template>
<script>
    export default {
        data() {
            return {
                msg: ''
            }
        },
        created() {
            this.init()
        },
        watch: {
            '$route': 'init'
        },
        methods: {
            init() {
                this.msg = this.$route.query.msg
            }
        }
    }
</script>
<style>
    .detail {
        color: #090909;
    }
</style>
