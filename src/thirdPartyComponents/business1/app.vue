<template>
    <div class="tpc-business1">
        <div>this is business1 component</div>
        <button type="button"
                @click="switchToDeal">
            switch to deal.vue
        </button>
    </div>
</template>
<script>
    export default {
        methods: {
            switchToDeal() {
                window.tpcEvent.emit('tpc_switchView', {
                    $desc: 'app1',
                    view: 'business1Deal'
                });
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .tpc-business1
        color #1609ff
        font-size 36px
        button
            font-size 36px
</style>
