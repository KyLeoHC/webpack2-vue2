<template>
    <div class="tpc-business2">
        this is business2 component
    </div>
</template>
<script>
    import registerTpc from '../../register';

    const business2 = {
        ready() {
        }
    };

    registerTpc('business2', business2);

    export default business2;
</script>
<style lang="stylus" scoped>
    .tpc-business2
        color #1609ff
        font-size 36px
</style>
