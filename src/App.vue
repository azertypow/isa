<template>
    <div id="app" :class="currentPageClassname" class="v-pages-wrap">
        <app-menu
                title="Isa Jaquier&#8209;Borella"
        />

        <Home
                msg="Welcome to Your Vue.js + TypeScript App"
                v-on:nextPage="getNextPage"
                v-on:previousPage="getPreviousPage"
        />

        <Description
                v-on:nextPage="getNextPage"
                v-on:previousPage="getPreviousPage"
        />

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Home from "./components/Home.vue";
  import AppMenu from "./components/appMenu/AppMenu.vue";
  import Description from "./components/description/Description.vue";
  import {Application} from "./Application/Application";

  @Component({
    components: {
      Description,
      AppMenu,
      Home,
    },
  })
  export default class App extends Vue {
    private application = new Application(0)

    private currentPageClassname = this.application.currentPage

    private getNextPage() {
      console.log(this.application.nextPage)
      this.currentPageClassname = this.application.nextPage
    }

    private getPreviousPage() {
      console.log(this.application.previousPage)
      this.currentPageClassname = this.application.previousPage
    }
  }
</script>

<style lang="scss">
    #app {
    }
</style>
