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
    title: "Keyboard Events",
    name: "Ryu"
  },
  methods: {
    updateName(e) {
      this.name = e.target.value;
    }
  }
});

new Vue({
  el: "#twowaydatabinding",
  data: {
    title: "Two Way Data Binding",
    name: "Ryu"
  },
  methods: {}
});

new Vue({
  el: "#modifiers",
  data: {
    title: "Modifiers"
  },
  methods: {
    logMessage() {
      console.log("hello, world");
    }
  }
});

new Vue({
  el: "#conditionalIf",
  data: {
    title: "Conditional If",
    showName: true,
    showAge: true
  },
  methods: {
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});

new Vue({
  el: "#loops",
  data: {
    title: "Loops",
    items: ["Mushroom", "Green Shells", "Red Shells", "Banana", "Star"],
    ninjas: [
      { name: "Crystal", age: 25, belt: "Black" },
      { name: "Ryu", age: 30, belt: "Brown" },
      { name: "Ken", age: 35, belt: "Orange" }
    ]
  },
  methods: {}
});
