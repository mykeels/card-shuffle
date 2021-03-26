const Card = Vue.component('card', {
    props: ["left", "top", "delay"],
    data: function() {
        return { visible: false };
    },
    computed: {
        backgroundImage() {
            return `url('img/Cards.png') ${this.left}px ${this.top}px`
        }
    },
    template: `<div class="card" v-if="visible" :style="{ background: backgroundImage }"></div>`,
    mounted() {
        setTimeout(function(){
            this.visible = true;
        }.bind(this), this.delay);
    }
})