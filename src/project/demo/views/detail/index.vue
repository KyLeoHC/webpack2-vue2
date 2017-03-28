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
<style lang="less" scoped>
    @fontColor: #7ae368;

    .detail {
        color: @fontColor;
    }
</style>
