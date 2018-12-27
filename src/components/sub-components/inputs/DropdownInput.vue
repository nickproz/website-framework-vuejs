<template>
    <div class="dropdown-input">
        <input-label v-if="label" :label="label"></input-label>
        <v-select
          class="dropdown"
          box
          :placeholder="placeholder"
          :items="items"
          :color="color"
        ></v-select>
    </div>
</template>

<script>
import InputLabel from '@/components/sub-components/inputs/InputLabel.vue';

/**
 * Component that holds a simple dropdown.
 */
export default {
    components: { InputLabel },
    name: 'dropdown-input',

    props: {
        // The items to show in the dropdown
        items: {
            type: Array,
            required: true
        },
        // The placeholder to show when there is no input
        placeholder: {
            type: String,
            default: '',
            required: false
        },
        // The color of the dropdown icon
        color: {
            type: String,
            default: null,
            required: false
        },
        // The label to render above the input, if one is provided
        label: {
            type: String,
            default: null,
            required: false
        }
    }
};
</script>

<style lang="less">
@import '../../../style/mixins';

.dropdown-input {
    .dropdown {
        .input();
    }
}
</style>
