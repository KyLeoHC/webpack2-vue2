<template>
    <div>
        <hello :info.sync="info"></hello>
        <p style="color: #1609ff">{{info}}</p>
        <p class="detail">message: {{msg}}</p>
        <p>{{detail.text}}</p>
    </div>
</template>
<script>
    import hello from '../../components/Hello.vue';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                msg: '',
                info: 'There is an info'
            };
        },
        components: {
            hello
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
