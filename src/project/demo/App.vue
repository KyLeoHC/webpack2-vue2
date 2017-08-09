<template>
    <div id="app">
        <div>
            <router-link :to="{ name: 'list'}">to List</router-link>
            <router-link :to="{ name: 'detail', query: { msg: 'List to Detail' }}">to Detail</router-link>
        </div>
        <router-view></router-view>
        <component :is="b1"></component>
        <component :is="b2"></component>
    </div>
</template>
<script>
    import store from './store';
    import tpcInitiator from 'tpc/init';
    import loadComponent from 'tpc/loader';
    import Vue from 'vue';

    tpcInitiator();
    export default {
        name: 'app',
        data() {
            return {
                b1: '',
                b2: '',
                currentView: 'business1App'
            };
        },
        store,
        components: {},
        methods: {
            exportInterface() {
                // 对外部第三方组件暴露接口
                let event = window.tpcEvent;
                event.on('tpc_switchView', data => {
                    console.log('tpc_switchView', data);
                    this.currentView = data.view || 'business1App';
                });
            }
        },
        mounted() {
            this.exportInterface();
            loadComponent(['business1', 'business2'], (list) => {
                Vue.component('business1', list[0]);
                Vue.component('business2', list[1]);
                this.b1 = 'business1';
                this.b2 = 'business2';
            });
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
