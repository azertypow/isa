<template>
    <section class="v-home">
        <div class="wrap">
            <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

            <h2 id="site-description">
                When I first got into the online advertising business,
                I was looking for the magical combination <em>that would</em> put my website into the top search engine rankings,
                catapult me to the forefront of the minds or individuals looking to buy my product.
            </h2>

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
