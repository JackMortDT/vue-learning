var data = {
  title: "First steps with vue",
  name: "Isaac",
  url: "https://www.youtube.com/",
  classes: ["one", "two"],
  wage: 10
}

const app = new Vue({
  el: "#app",
  data: data,
  methods: {
    changeWage(amount){
      this.wage += amount
    }
  }
})