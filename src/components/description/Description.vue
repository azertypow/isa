<template>
    <section class="v-description">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        <div class="content">
            <p>
                For any aspect of self-improvement, there has to be a reason for you to start and keep going.
                That is your <em>motivation</em> – the reason for <a href="#">doing what you do</a>. In order to attempt any sort of improvement in your life,
                you need to be motivated in some way to get started.
            </p>

            <p>
                Strategies for self-improvement start with defining what it is you want to achieve and then charting a course through which you can effect the improvements or changes.
                These do not have to be drastic changes – they could be something as simple as making time for yourself to write in a journal each day or something to improve your health, such as quitting smoking.
            </p>

            <p>
                Motivation comes from within. It is something that you want to do for you. This is what keeps you going, getting up each day and going off to work.
                Children are often the motivating force behind parents saving money, when they would ordinarily blow it on something frivolous. You know that you will need money for your children’s
                higher education or to give them the extras that they want, such as toys and brand name clothing. This is the reason that you work each day, maintain a home and spend time enjoying each other.
            </p>
        </div>
        <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
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

        .content {
            max-width: 30em;
        }
    }
</style>