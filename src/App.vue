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

        <Contact
                v-on:nextPage="getNextPage"
                v-on:previousPage="getPreviousPage"
        />

        <Quotation
                v-on:nextPage="getNextPage"
                v-on:previousPage="getPreviousPage"
        />

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Application} from "./Application/Application";
  import Introduction from "./components/Introduction.vue";
  import AppMenu from "./components/AppMenu.vue";
  import Description from "./components/Description.vue";
  import Contact from "./components/Contact.vue";
  import Quotation from "./components/Quotation.vue";

  @Component({
    components: {
      AppMenu,
      Introduction,
      Description,
      Contact,
      Quotation,
    },
  })
  export default class App extends Vue {
    private application = new Application(0)

    private currentPageName = this.application.currentPage

    private getNextPage() {
      this.currentPageName = this.application.nextPage
    }

    private getPreviousPage() {
      this.currentPageName = this.application.previousPage
    }
  }
</script>

<style lang="scss">
    #app {
    }
</style>
