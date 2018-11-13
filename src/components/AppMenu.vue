<template>
    <section class="v-app-menu" >
        <h1 id="site-title">
            Isa<br>Jaquier&#8209;Borella
        </h1>

        <div id="site-page-name">{{this.pageName}}</div>

        <div id="site-lang-wrap">
            <button>Fr</button>
            <button>En</button>
            <button>It</button>
        </div>

        <div id="page-position">
            <div class="introduction">introduction</div>
            <div class="description">déscription</div>
            <div class="contact">contact</div>
            <div class="quotation">demande de devis</div>
        </div>

        <div id="social-share">
            <div>share it!</div>
            <div class="twitter"><a href="#">twitter</a></div>
            <div class="facebook"><a href="#">facebook</a></div>
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
    export default class AppMenu extends Vue {
        @Prop({required: true, type: String}) private pageName?: string
    }
</script>

<style lang="scss">
    @import "../scss/_params";
    @import "../scss/_params-fonts";

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
            user-select: none;
        }

        #page-position {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            user-select: none;

            > * {
                padding: .5em 0;
            }
        }

        #social-share {
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            user-select: none;

            > * {
                padding: .5em 0;
            }
        }

        /*
        * pages
        */
        .introduction & {
            color: $color-light;

            #site-title {
                @include font-xxl;
            }

            #site-page-name {
                transition: opacity 250ms ease-in-out;
                opacity: 0;
            }

            .introduction {
                text-decoration: line-through;
            }
        }

        .description & {
            .description {
                text-decoration: line-through;
            }
        }

        .contact & {
            color: $color-light;

            .contact {
                text-decoration: line-through;
            }
        }

        .quotation & {

            .quotation {
                text-decoration: line-through;
            }
        }
    }
</style>