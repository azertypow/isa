<template>
    <div id="app" :class="currentPageName" class="v-pages-wrap">
        <app-menu
                :pageName="this.currentPageName"
        />

        <Introduction
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
  import Introduction from "./components/Introduction.vue";
  import AppMenu from "./components/appMenu/AppMenu.vue";
  import Description from "./components/description/Description.vue";
  import {Application} from "./Application/Application";

  @Component({
    components: {
      Description,
      AppMenu,
      Introduction,
    },
  })
  export default class App extends Vue {
    private application = new Application(0)

    private currentPageName = this.application.currentPage

    private getNextPage() {
      console.log(this.application.nextPage)
      this.currentPageName = this.application.nextPage
    }

    private getPreviousPage() {
      console.log(this.application.previousPage)
      this.currentPageName = this.application.previousPage
    }
  }
</script>

<style lang="scss">
    #app {
    }
</style>
