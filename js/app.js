/// <reference path="./comps/card.vue.js" />

var total = _.range(52);

function generateCoordinates() {
    var vertical_step = 73, horizontal_step = 98, row = 4, columns = 13, top = 0, left = 0, delay = 0;

    for( var i = 0; i < total.length; i++) {
        total[i] = { left: left, top: top, delay: delay += 100 };

        left += vertical_step;
        
        if ( left % 13 == 0 ) {
            left = 0;
            top += horizontal_step;
        }
    }
}

generateCoordinates();

Vue.directive('sortable', {
    inserted: function (el, binding) {
        var sortable = new Sortable(el, binding.value || {});
    }
});

const app = new Vue({
    el: '#app',
    data: { total: total },
    components: {
        'card': Card
    }
})