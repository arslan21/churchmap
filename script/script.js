var appVue = new Vue({
  el: '.listBlock',
  data: data,

  methods: {

  },

  computed: {
    nameInList() {
      return this.name + " (" + this.altName + ")"
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
})
