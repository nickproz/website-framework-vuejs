<template>
    <div class="text-input">
        <input-label v-if="label" :label="label"></input-label>
        <v-text-field
            class="text-field"
            box
            :rules="rules"
            :appendIcon="appendIcon"
            :placeholder="placeholder"
            :value="value"
            @input="updateInput($event)"
        ></v-text-field>
    </div>
</template>

<script>
import InputLabel from '@/components/sub-components/inputs/InputLabel.vue';

/**
 * Component that holds a simple text input.
 */
export default {
    components: { InputLabel },
    name: 'text-input',

    props: {
        // The value of the text input
        value: {
            type: String,
            default: '',
            required: false
        },
        // The placeholder to show when there is no input
        placeholder: {
            type: String,
            default: '',
            required: false
        },
        // The icon to add to the end of the input field, if one is provided
        appendIcon: {
            type: String,
            default: null,
            required: false
        },
        // The label to render above the input, if one is provided
        label: {
            type: String,
            default: null,
            required: false
        },
        // The validation rules for the text field, if it is required. Defaults to no validation
        rules: {
            type: Array,
            default: () => [ () => true],
            required: false
        }
    },

    methods: {
        /**
         * Emits the value of the input to the parent.
         *
         * @param value - the value of the text input
         */
        updateInput(value) {
            this.$emit('input', value);
        }
    }
};
</script>

<style lang="less">
@import '../../../style/mixins';

.text-input {
    .text-field {
        .input();
    }
}
</style>
