<template>
    <div>
        <span class="first">I am the first view!</span>
        <br/>
        <span>{{time | dateFormat('yyyy-MM-dd hh:mm:ss')}}</span>
        <br/>
        <c1/>
        <c2/>
        <c3/>
        <c4/>
        <c5/>
        123
    </div>
</template>
<script>
    import dateFormat from 'src/filters/dateFormat.js'
    import c1 from '../../components/children1.vue'
    import c2 from '../../components/children2.vue'
    import c3 from '../../components/children3.vue'
    import c4 from '../../components/children4.vue'
    import c5 from '../../components/children5.vue'

    export default {
        data() {
            return {
                time: new Date().getTime()
            }
        },
        filters: {
            dateFormat
        },
        components: {
            c1,
            c2,
            c3,
            c4,
            c5
        }
    }
</script>
<style>
    .first {
        color: #fff;
    }
</style>
