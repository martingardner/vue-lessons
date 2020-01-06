# vue-lessons

- reference repo https://github.com/iamshaunjp/vue-firebase

* make subfolder of the lesson file and pull in the zipped stuff for working on that particular lesson

- getting started guide
  https://vuejs.org/v2/guide/
- event modifiers
  https://vuejs.org/v2/guide/events.html#Event-Modifiers

# notes:

- v-bind:href and :href are the same thing
- v-bind is known as a directive
- v-on:click and @click are the same thing

# create vue-cli project

- vue init webpack-simple myproject
- npm run dev localhost:8080

# this.$route vs this.$router

- $this.$route refers to a singular route you are on, this.\$router refers to the entire history of all the routes.

# vue/cli 2 vs vue/cli 3 creation

- vue/cli 2 "vue init webpack-simple myapp"
- vue/cli 3 "vue create myapp"

# Instant Prototyping

- npm install -g @vue/cli-service-global
- contains pieces to allow for instantly building a component and trying it out.
- be in same directory of file "vue serve [filename.vue]" and it'll allow instant base setup to render a component.
