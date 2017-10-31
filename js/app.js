/// <reference path="./comps/card.vue.js" />

Vue.directive('sortable', {
    inserted: function (el, binding) {
        var sortable = new Sortable(el, binding.value || {});
    }
});

const app = new Vue({
    el: '#app',
    data: {},
    components: {
        'card': Card
    }
})