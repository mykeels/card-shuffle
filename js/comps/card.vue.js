const Card = Vue.component('card', {
    props: ['left', 'top'],
    computed: {
        backgroundImage() {
            return 'url(\'img/Cards.png\') ' + this.left + 'px ' + this.top + 'px'
        }
    },
    template: `<div class="card" :style="{ background: backgroundImage }"></div>`,
    mounted() {

    }
})