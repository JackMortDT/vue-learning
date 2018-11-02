var data = {
  title: "First steps with vue",
  name: "Isaac",
  url: "https://www.youtube.com/",
  classes: ["one", "two"],
  wage: 10,
  coords: {
    x: 0,
    y: 0
  }
}

const app = new Vue({
  el: "#app",
  data: data,
  methods: {
    logEvent(e){
      console.log(e)
    },
    logCoords(e){
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    }
  }
})