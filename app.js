var data = {
  title: "First steps with vue",
  name: "Isaac",
  url: "https://www.youtube.com/",
  classes: ["one", "two"]
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