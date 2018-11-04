<template>
    <section class="v-introduction">
        <div class="wrap">
            <div class="content">
                <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

                <p id="site-description">
                    When I first got into the online advertising business,
                    I was looking for the magical combination <em>that would</em> put my website into the top search engine rankings,
                    catapult me to the forefront of the minds or individuals looking to buy my product.
                </p>

                <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Introduction extends Vue {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../scss/pages";
    @import "../scss/_grid";

    .v-introduction {
        @include page-element("dark");


        .wrap {
            @include column-container;
            @include container-content-centred;
            @include site-max-width;
            height: 100%;
        }

        .content {
            @include column(8, 12);
            height: 100%;

            .next-button {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }

            .previous-button {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }

            #site-description {
                margin: 0;
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

    }
</style>
