<template>
    <div>
        <div class="first">I am the list view!</div>
        <div>{{time | dateFormat('yyyy-MM-dd hh:mm:ss')}}</div>
        <ul>
            <li v-for="item in list">{{item.name}}/{{item.price}}</li>
        </ul>
    </div>
</template>
<script>
    import dateFormat from 'src/filters/dateFormat';
    import {fetchGoodsData} from 'project/demo/service/goods';

    export default {
        data() {
            return {
                time: new Date().getTime(),
                list: []
            };
        },
        filters: {
            dateFormat
        },
        created() {
            this.init();
        },
        watch: {
            '$route': 'init'
        },
        methods: {
            init() {
                fetchGoodsData((list) => {
                    this.list = list;
                }).then(() => {
                    console.log('处理数据完成');
                });
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .first
        color: #ff8986

    ul
        list-style: none
</style>
