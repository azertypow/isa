<template>
    <section class="v-home">
        <div class="wrap">
            <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        <h2 id="site-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto minus
            natus, neque omnis repudiandae sed soluta. Blanditiis corporis eaque excepturi, facere facilis ipsum maxime
            nam nisi nobis odit tempore.</h2>

            <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Home extends Vue {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../scss/pages";

    .v-home {
        @include pageElement("dark");

        .wrap {
            .next-button {
                position: absolute;
                bottom: 1em;
                left: 50%;
                transform: translateX(-50%);
            }

            .previous-button {
                position: absolute;
                top: 1em;
                left: 50%;
                transform: translateX(-50%);
            }

            #site-description {
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 25em;
            }
        }

    }
</style>
