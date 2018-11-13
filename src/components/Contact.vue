<template>
    <section class="v-contact">
        <button class="previous-button" v-on:click="$emit('previousPage')" >return</button>

        <div class="wrap">
            <div class="content">
                <p>
                    Vous pouvez à tout moment prendre contact avec moi&nbsp;:
                </p>

                <div class="contact-list">
                    <div class="column">
                        <div class="icon">
                            <svg width="93px" height="90px" viewBox="0 0 93 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Exportable-Copy" transform="translate(-321.000000, -4449.000000)" stroke-width="2">
                                        <g id="contact" transform="translate(0.000000, 3980.000000)">
                                            <g id="btn" transform="translate(233.000000, 439.000000)">
                                                <g id="mail" transform="translate(129.000000, 69.000000) rotate(-195.000000) translate(-129.000000, -69.000000) translate(89.000000, 29.000000)">
                                                    <rect id="Rectangle-6" stroke="#FFFFFF" fill="#FFFFFF" x="1" y="1" width="78" height="48" rx="1"></rect>
                                                    <polygon id="Path-2" stroke="#FFFFFF" fill="#161C2D" transform="translate(40.000000, 34.000000) rotate(-360.000000) translate(-40.000000, -34.000000) " points="3 49 40 19 77 49"></polygon>
                                                    <path d="M0.178865951,32 L40,-0.287405985 L79.821134,32 L0.178865951,32 Z" id="Path-2" stroke="#161C2D" fill="#FFFFFF" transform="translate(40.000000, 16.000000) rotate(-180.000000) translate(-40.000000, -16.000000) "></path>
                                                    <polygon id="Path-2" stroke="#FFFFFF" transform="translate(40.000000, 64.083261) rotate(-180.000000) translate(-40.000000, -64.083261) " points="3 79.0832611 40 49.0832611 77 79.0832611"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="column">
                        <div class="icon">
                            <svg width="70px" height="90px" viewBox="0 0 70 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Exportable-Copy" transform="translate(-605.000000, -4443.000000)" stroke-width="2">
                                        <g id="contact" transform="translate(0.000000, 3980.000000)">
                                            <g id="btn" transform="translate(233.000000, 439.000000)">
                                                <g id="phone" transform="translate(407.000000, 69.000000) rotate(-285.000000) translate(-407.000000, -69.000000) translate(367.000000, 44.000000)">
                                                    <rect id="Rectangle-6" stroke="#FFFFFF" fill="#FFFFFF" x="1" y="1" width="78" height="48" rx="1"></rect>
                                                    <path d="M9.70710678,3.12132034 L9.70710678,47.1213203 L67.7071068,47.1213203 L67.7071068,3.12132034 L9.70710678,3.12132034 Z" id="Rectangle-7" stroke="#161C2D" fill="#161C2D"></path>
                                                    <path d="M73,18 L73,32" id="Line" stroke="#161C2D"></path>
                                                    <path d="M5,22 L5,28.0827625" id="Line-Copy-7" stroke="#161C2D"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="column">
                        <dic class="icon">
                            <svg width="75px" height="67px" viewBox="0 0 75 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Exportable-Copy" transform="translate(-880.000000, -4456.000000)">
                                        <g id="contact" transform="translate(0.000000, 3980.000000)">
                                            <g id="btn" transform="translate(233.000000, 439.000000)">
                                                <g id="linkedin" transform="translate(685.500000, 69.000000) rotate(-15.000000) translate(-685.500000, -69.000000) translate(653.000000, 42.000000)">
                                                    <image id="In-White-54px-R" x="-3.41060513e-13" y="-1.70530257e-13" width="65" height="54" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA2CAYAAACY0PQ8AAAABGdBTUEAALGOfPtRkwAAAv1JREFUaAXtWz1PWzEUJRUbUytlBYTUuUPJT0CsVOrKhpDo1KlD/wESAzN/gA2YEYKlayT2LmRNhixlypCe84Ijx3r2vYYEvw9bcvxxz7V9j6+vn4d0ptPpGtIB8jnyFhs1TgOs/SfyTYwNHZBAAq5jlGqA/YY1qokgCU9QqLsHuPtCj9h2O31tklCcBx+gxv0d7do/aIFNxmUSsLuZBC0Jo9HoAbnXeUmss68xR4SBMZSGw+Gpz1jITkK6iWVrmF+VCfImGHnvI8D0E+MdIK1ARQCWKMaEX8bYQKnBBNTTi4LfCQwBmiVywzW4d8ao1s415dtBIgHnfVfaPWB2JEzV5ZIn/FYYcKbAVBsiBXDs9InPAsok/YRy9e0QvCKNATD2Cnl+NFhnn5FXtFSTELwdfB5Qk/58O8Rs1HoMeFVYvEOeMfYt8l9rjk+o97rd7herbzVV6TxLs5bph3RsPOLKAHlfwG8Aczoej21VTV0dE8TAGFogZWWrCekYPANrCOfKoEcyBkZfUVabhFgCDCEkIsIj1CRIH0tm/qWVPP8454evGRBPmefJZPLjNbohHfGKlB5RdEt3AknHxce24Un/QOSGoNf4K/JSICBKnPyKxK7yAfaZq8bu/qHLKyy4A+ZIgdNBpCgrjVKmL+lQDj1G+0dXH33et4oZl8S5eiVtdWAkMJjMxL6yTNmHtfthiPe6gyz47cBxyuZ1+tQkvPvtQAO423D9TdY96bunfyXdSUiAJXuCNT1BvlRxKhIYDCuTUpEgEfBRAixTnuRjiQFMMkL64FKM0fiPJYnDKHlVj0OUEW8FZxLAYCYhkzA7SMkfUG89zxH6X4FltlMfjX5bSDAEXNgMoH7MdptIIAGF0TQciV5Q9LUxMNJw5vnRaIsnwOZ5Mt5ATyhS9gTQ0Ja3Qygw9kUSXjymjoX7gDJE2LYUV2SbSLCNX6i3MSYsEMBGJiGTMHMKesJgVm3Ub5RNJIH/GWpairKJJPC/QvzPUBR7FWWNNkT9/4l2/AdhYu/8J0jj6wAAAABJRU5ErkJggg=="></image>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </dic>
                    </div>
                </div>

                <p>
                    Ou en m’envoyant votre <em>courriel</em> ou <em>numero de telephone</em>, je vous recontact
                    le plus rapidement possible :
                </p>

                <form action="#">
                    <Input
                            placeholder="couriel ou votre numéro de téléphone"
                            id="info-to-send"
                            name="mail or phone"
                    />

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
      Input,
    },
  })
    export default class Contact extends Vue {
      get isFrench() {return true}
    }
</script>

<style lang="scss">
    @import "../scss/pages";
    @import "../scss/_grid";
    @import "../scss/ui";

    .v-contact {
        @include page-element("dark");

        .wrap {
            @include column-container;
            @include container-content-centred;
            @include site-max-width;
        }

        .content {
            @include column(8, 12)
        }

        .contact-list {
            @include column-container;
            @include container-content-centred;

            .column {
                @include column(1, 3)
            }
        }

        .icon {
            > svg {
                display: block;
                margin: auto;
            }
        }

        .send-contact {
            @include button;
            margin-top: 2em;
        }
    }
</style>