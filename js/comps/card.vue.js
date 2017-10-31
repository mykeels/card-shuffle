const Card = Vue.component('card', {
    props: ['left', 'top'],
    computed: {
        style() {
            return {
                'background-image': 'url(\img/cards.png\') ' + this.left + ' ' + this.top
            }
        }
    },
    render() {
        return `<div class="card" :style="style"></div>`
    }
})