<template>
    <section class="v-app-menu" >
        <h1 id="site-title" v-html="this.title"></h1>
    </section>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
    export default class AppMenu extends Vue {
        @Prop({required: true, type: String}) private title?: string
    }
</script>

<style lang="scss">
    @import "../../scss/_parameters";

    .v-app-menu {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        transition: color 500ms ease-in-out;

        #site-title {
            top: 0;
            left: 0;
            margin: 0;
            position: absolute;
        }

        .home & {
            color: $color-light;
        }
    }
</style>