<template>
    <div class="tpc-business1">
        <div>this is business1 deal component</div>
        <button type="button"
                @click="switchToDeal">
            switch to app.vue
        </button>
    </div>
</template>
<script>
    import registerTpc from '../../register';

    const business1 = {
        methods: {
            switchToDeal() {
                window.tpcEvent.emit('tpc_switchView', {
                    $desc: 'business1',
                    view: 'business1App'
                });
            }
        }
    };

    registerTpc('business1', business1);

    export default business1;
</script>
<style lang="stylus" scoped>
    .tpc-business1
        color #1609ff
        font-size 36px
        button
            font-size 36px
</style>
