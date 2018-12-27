<template>
    <div class="date-picker">
        <v-menu transition="scale-transition" class="menu">
            <!-- Text input -->
            <text-input
              slot="activator"
              v-model="dateFormatted"
              placeholder="MM/DD/YYYY"
              appendIcon="event"
              :label="label"></text-input>

            <!-- Date picker popup -->
            <v-date-picker
              v-model="date"
              :color="color"
              no-title></v-date-picker>
        </v-menu>
    </div>
</template>

<script>
import TextInput from '@/components/sub-components/inputs/TextInput.vue';

/**
 * Component that holds a date picker input with a label.
 */
export default {
    name: 'date-picker-input',
    components: { TextInput },

    data: (vm) => ({
        // The actual date value from the date picker
        date: null,
        // The date value formatted to a particular format
        dateFormatted: null
    }),

    props: {
        // The color highlights for the date picker
        color: {
            type: String,
            default: null
        },
        // The label to render above the input
        label: {
            type: String,
            default: ''
        }
    },

    watch: {
        /**
         * Formats the date for the text input and emits the actual date to the parent to handle.
         */
        date() {
            this.dateFormatted = this.formatDate(this.date);
            this.$emit('input', this.dateFormatted);
        }
    },

    methods: {
        /**
         * Formats our date to display in the input field.
         *
         * @param date - the date to format
         * @returns {*} the passed in date formatted into a human-readable format
         */
        formatDate(date) {
            if (!date) {
                return null;
            } else {
                const [year, month, day] = date.split('-');
                return `${month}/${day}/${year}`;
            }
        }
    }
};
</script>

<style lang="less">
.date-picker {
    // Icon color
    .input-group__append-icon {
        color: #9370d8 !important;
    }

    // Makes the date input field full-width
    .menu {
        display: block !important;
    }
}
</style>
