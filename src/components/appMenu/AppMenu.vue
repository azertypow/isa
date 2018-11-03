<template>
    <section class="v-app-menu" >
        <h1 id="site-title" v-html="this.title"></h1>
        <div id="site-page-name">{{this.pageName}}</div>
        <div id="site-lang-wrap">
            <button>Fr</button>
            <button>En</button>
            <button>It</button>
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
    export default class AppMenu extends Vue {
        @Prop({required: true, type: String}) private title?: string
        @Prop({required: true, type: String}) private pageName?: string
    }
</script>

<style lang="scss">
    @import "../../scss/_params";

    .v-app-menu {
        transition: color 500ms ease-in-out;

        > * {
            position: fixed;
            z-index: 1000;
        }

        #site-title {
            top: 0;
            left: 0;
            margin: 0;
            transition: font-size 500ms ease-in-out, line-height 500ms ease-in-out;
            font-size: 1em;
            user-select: none;
        }

        #site-page-name {
            top: 0;
            left: 25%;
            user-select: none;
            transition: opacity 250ms 250ms ease-in-out;
            opacity: 1;
        }

        #site-lang-wrap {
            top: 0;
            right: 25%;
        }

        /*
        * pages
        */
        .home & {
            color: $color-light;

            #site-title {
                font-size: 2.5em;
            }

            #site-page-name {
                transition: opacity 250ms ease-in-out;
                opacity: 0;
            }
        }
    }
</style>