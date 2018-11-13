<template>
    <section class="v-quotation">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        <div class="wrap">
            <div class="content">

                <p>Vous pouvez à tout moment prendre contact avec moi :</p>

            </div>
        </div>

        <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
    export default class Quotation extends Vue {

    }
</script>

<style lang="scss">
    @import "../scss/pages";
    @import "../scss/_grid";

    .v-quotation {
        @include page-element("white");

        .wrap {
            @include column-container;
            @include container-content-centred;
            @include site-max-width;
            height: 100%;
        }

        .content {
            @include column(8, 12);
        }
    }
</style>