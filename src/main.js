import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'

new Vue({
    el: '#app',
    render: h => h(App)

});
new Vue({
    el: '#second',
    render: m => m(Test)
});