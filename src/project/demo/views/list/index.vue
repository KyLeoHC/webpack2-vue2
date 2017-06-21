<template>
    <div>
        <div class="first">I am the list view!</div>
        <div>{{time | dateFormat('yyyy-MM-dd hh:mm:ss')}}</div>
        <ul>
            <infinite-scroll-list
                :heights="heightList"
                :remain="10"
                @toTop="onTop"
                @toBottom="onBottom"
                @scrolling="onScroll">
                <li v-for="(item, index) in list"
                    :key="item.name"
                    :style="{height: item.itemHeight + 'px'}">
                    {{item.name}}/{{item.price}}/{{item.itemHeight}}
                </li>
            </infinite-scroll-list>
        </ul>
    </div>
</template>
<script>
    import dateFormat from 'src/filters/dateFormat';
    import infiniteScrollList from 'vue-scroll-list';

    export default {
        data() {
            return {
                time: new Date().getTime(),
                list: [],
                heightList: []
            };
        },
        components: {
            infiniteScrollList
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
            onTop() {
                console.log('page to top.');
            },
            onBottom() {
                console.log('page to bottom.');
            },
            onScroll(event) {
                console.log(event);
            },
            init() {
                for (let i = 0; i < 40; i++) {
                    let itemHeight = Math.random() > 0.5 ? 40 : 100;
                    this.list.push({
                        name: 'name-' + i,
                        price: Math.floor(Math.random() * 1000),
                        itemHeight: itemHeight
                    });
                    this.heightList.push(itemHeight);
                }
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .first
        color: #ff8986

    ul
        border 1px solid #000
        list-style none
        height 600px
        li
            border-bottom 1px solid #008800
            &:last-child
                border-bottom 0
</style>
