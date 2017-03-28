<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <article>Demo2 work without vue-router</article>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App --- 2'
            }
        }
    }
</script>
<style lang="scss" scoped>
    $fontSize: 36px;
    .hello {
        border: 1px solid #000;

        article {
            font-size: $fontSize;
        }
    }
</style>
