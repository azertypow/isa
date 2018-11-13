<template>
    <section class="v-quotation">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        <div class="wrap">
            <div class="content">

                <p>Vous pouvez à tout moment prendre contact avec moi :</p>

                <form action="#">
                    <Input
                            placeholder="votre nom et/ou prénom"
                            id="quotation-name"
                            name="quotation-name"
                    />

                    <Input
                            placeholder="votre couriel"
                            id="quotation-email"
                            name="quotation-email"
                    />

                    <label>
                        <textarea >coucou</textarea>
                    </label>

                    <input class="send-contact" type="submit" value="envoyer mon contact">
                </form>

            </div>
        </div>

        <button class="next-button"     v-on:click="$emit('nextPage')"     >continue</button>
    </section>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Input from "./Input.vue";

  @Component({
    components: {
      Input
    }
  })
    export default class Quotation extends Vue {

    }
</script>

<style lang="scss">
    @import "../scss/pages";
    @import "../scss/_grid";
    @import "../scss/ui";

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

        textarea {
            all: unset;
            resize: none;
            display: block;
            border: solid 1px ;
            width: 100%;
            box-sizing: border-box;
        }

        .send-contact {
            @include button;
            margin-top: 2em;
        }
    }
</style>