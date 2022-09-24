const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirm: "",
    };
  },
  methods: {
    confirmName() {
      this.confirm = this.name;
    },
    submitForm() {
      alert("submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
  },
});

app.mount("#events");
