new Vue({
  el: "#app",
  data: {
    title: "Becoming a H2",
    name: "Bubba",
    url: "https://www.youtube.com",
    classes: ["one", "two"]
  },
  methods: {
    greet(timeofday) {
      return `Hello there ${this.name}, and good ${timeofday}`;
    }
  }
});

new Vue({
  el: "#events",
  data: {
    title: "Events content",
    wage: 10
  },
  methods: {
    changeWage(amount) {
      this.wage += amount;
    }
  }
});

new Vue({
  el: "#eventsobject",
  data: {
    title: "Events Object",
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    logEvent(e) {
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    }
  }
});

new Vue({
  el: "#keyboardevents",
  data: {
    title: "Keyboard Events"
  },
  methods: {}
});
