<template>
    <div id="app">
        <div>
            <router-link :to="{ name: 'list'}">to List</router-link>
            <router-link :to="{ name: 'detail', query: { msg: 'List to Detail' }}">to Detail</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import store from './store';
    import {modules as tpc} from 'tpc';

    export default {
        name: 'app',
        data() {
            return {
                currentView: 'business1App'
            };
        },
        store,
        components: {
            ...tpc
        },
        methods: {
            exportInterface() {
                // 对外部第三方组件暴露接口
                let event = window.tpcEvent;
                event.on('tpc_switchView', data => {
                    this.currentView = data.view || 'business1App';
                });
            }
        },
        mounted() {
            this.exportInterface();
        }
    };
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .logo {
        display: inline-block;
        background: url("/static/logo.png");
        width: 200px;
        height: 200px;
        background-size: contain;
    }
</style>
