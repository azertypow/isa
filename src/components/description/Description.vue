<template>
    <section class="v-description">
        <button class="next-button"     v-on:click="$emit('nextPage')"     >return</button>

        <p>description content</p>

        <button class="previous-button" v-on:click="$emit('previousPage')" >continue</button>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
    export default class Description extends Vue {

    }
</script>

<style lang="scss">
    @import "../../scss/pages";

    .v-description {
        @include pageElement("white");
    }
</style>