<template>
    <div>
        <p class="detail">message: {{msg}}</p>
        <p>{{detail.text}}</p>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                msg: ''
            };
        },
        created() {
            this.init();
            this.addToDetail({
                text: 'I\'m Vuex'
            });
        },
        watch: {
            '$route': 'init'
        },
        computed: mapGetters({
            detail: 'detail'
        }),
        methods: {
            init() {
                this.msg = this.$route.query.msg;
            },
            ...mapActions(['addToDetail'])
        }
    };
</script>
<style lang="less" scoped>
    @fontColor: #7ae368;

    .detail {
        color: @fontColor;
    }
</style>
