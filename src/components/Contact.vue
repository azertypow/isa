<template>
    <section class="v-contact">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        CONTACT

        <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
    export default class Contact extends Vue {

    }
</script>

<style lang="scss">
    @import "../scss/pages";

    .v-contact {
        @include page-element("dark");
    }
</style>