var appVue = new Vue({
  el: '.listBlock',
  data: data,

  methods: {
    markerCentered: function (location) {
      console.log(location);
      console.log(markers);
      // var map = document.querySelector('#map')
      window.setCenter(location);
    }
  },

  computed: {

  }
})
