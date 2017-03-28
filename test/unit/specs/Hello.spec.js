import Vue from 'vue'
import Hello from '@/project/demo2/components/Hello'

describe('Hello.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Hello)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello article').textContent)
            .to.equal('Demo2 work without vue-router')
    })
})
