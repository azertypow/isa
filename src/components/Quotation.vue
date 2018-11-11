<template>
    <section class="v-quotation">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        quotation

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

    .v-quotation {
        @include page-element("white")
    }
</style>