var data = {
  title: "First steps with vue",
  name: "Isaac"
}

const app = new Vue({
  el: "#app",
  data: data,
  methods: {
    greet(time){
      return `Hello and good ${time} ${this.name}`
    }
  }
})