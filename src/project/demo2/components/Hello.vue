<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <article>Demo2 work without vue-router</article>
        <article>{{person.name}}/{{person.sex}}</article>
    </div>
</template>

<script>
    import {fetchPersonData} from 'project/demo2/service/person';

    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App --- 2',
                person: {}
            };
        },
        created() {
            fetchPersonData((person) => {
                this.person = person;
            });
        }
    };
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
