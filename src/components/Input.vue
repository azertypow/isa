<template>
    <div class="v-input">
        <div class="container">
            <input  type="text" placeholder=""
                    :id="id"
                    :name="name"
                    v-model="$inputValue"
                    :class="{'input-as-value' : $inputAsValue}"
                    v-on:focus="getInfo">

            <label  :for="name"
                    >{{this.placeholder}}</label>

            <div class="focus-border"></div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {IsEmail, validate} from "class-validator"

  @Component
    export default class Input extends Vue {
        @Prop({required: true, type: String}) public placeholder?: string
        @Prop({required: true, type: String}) public id?: string
        @Prop({required: true, type: String}) public name?: string

        private inputValue = ""
        set $inputValue(value: string) { this.inputValue = value}
        get $inputValue() { return this.inputValue}

        get $inputAsValue() { return this.$inputValue.length > 0}

        // get isMail() { validator.isEmail() }

        private getInfo() {
            // this.email = "coucou@gmail.com"
            const formInfoToValidate = new MailOrPhoneFormValidation()
            formInfoToValidate.email        = "2053392@gmail.com"

            // @todo implement phone number validation
            // formInfoToValidate.phoneNumber  = "+33630347112"

            valideMail(formInfoToValidate)
        }

    }

    function valideMail(objectToValidate: MailOrPhoneFormValidation) {
      console.log(validate(objectToValidate))

      validate(objectToValidate).then( (result) => {
        console.log(result)
      })
    }

    class formValidation {
        @IsEmail() public email?: string

      // @todo implement phone number validation
      //   @IsPhoneNumber("FR") public FR_phoneNumber?: string
      //   @IsPhoneNumber("IT") public IT_phoneNumber?: string
      //   @IsPhoneNumber("CH") public CH_phoneNumber?: string
      //   @IsPhoneNumber("EN") public EN_phoneNumber?: string
      //   @IsPhoneNumber("US") public US_phoneNumber?: string
    }

</script>

<style lang="scss">
    @import "../scss/_params";
    @import "../scss/_params-fonts";

    .v-input {
        $transition-timing: 1000ms;
        $transition-timing-function: cubic-bezier(0.25, 0, 0, 1);
        $input-line-height: 2em;

        overflow: hidden;
        padding-top: $input-line-height / 2;

        .container {
            display: block;
            position: relative;

            input {
                all: unset;
                display: block;
                position: relative;
                width: 100%;
                border-bottom: $underline-width/2 solid $color-main-light;
                line-height: $input-line-height;
            }

            label {
                all: unset;
                display: block;
                width: 100%;
                position: absolute;
                top: 50%;
                left: 0;
                user-select: none;
                pointer-events: none;
                transition: transform $transition-timing / 2 $transition-timing-function, font-size $transition-timing / 2 $transition-timing-function, line-height $transition-timing / 2 $transition-timing-function;
                transform: translateY(-50%);
                @include font-reg;
            }

            .focus-border {
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: $underline-width;
                background-color: $color-ternary;
                transition: transform $transition-timing $transition-timing-function;
                transform: translateX(-100%);

            }
            input:focus,
            input.input-as-value {
                ~ label {
                    @include font-s;
                    transform: translateY(- ($input-line-height + ($input-line-height / 4)) )
                }

                ~ .focus-border {
                    transform: translateX(0%);
                }
            }
        }
    }
</style>