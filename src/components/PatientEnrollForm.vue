<template>
    <v-form class="patient-enroll-form" v-model="valid" ref="form">
        <v-card class="form-card" @keydown.enter="submit()">
            <!-- Name of patient -->
            <text-input
              v-model="name"
              label="Name of patient"
              placeholder="First and last name"
              :rules="generateRequiredFieldValidationRules(`Name is required.`)"
            ></text-input>

            <!-- Date of birth -->
            <date-picker-input
              v-model="dateOfBirth"
              color="theme"
              label="Date of birth"
              :rules="generateRequiredFieldValidationRules(`Date of birth is required.`)"
            ></date-picker-input>

            <!-- Insurance name -->
            <dropdown-input
                v-model="insuranceName"
                color="theme"
                placeholder="Select insurance"
                label="Insurance name"
                :items="insuranceNameDropdownItems"
                :rules="generateRequiredFieldValidationRules(`Insurance is required.`)"
            ></dropdown-input>

            <!-- Insurance information -->
            <div class="insurance-container">
                <!-- Group number -->
                <text-input
                  class="insurance-input"
                  v-model="groupNumber"
                  label="Group no."
                  placeholder="Enter group number"
                  :rules="generateRequiredFieldValidationRules(`Group number is required.`)"
                ></text-input>

                <!-- ID number -->
                <text-input
                  class="insurance-input"
                  v-model="idNumber"
                  label="ID no."
                  placeholder="Enter id number"
                  :rules="generateRequiredFieldValidationRules(`ID number is required.`)"
                ></text-input>
            </div>

            <!-- Diagnosis -->
            <text-input
              v-model="diagnosis"
              label="Diagnosis"
              placeholder="Enter diagnosis code"
              :rules="generateRequiredFieldValidationRules(`Diagnosis code is required.`)"
            ></text-input>

            <!-- Submit button -->
            <v-btn depressed large color="theme" @click="submit()" class="submit-button">Next</v-btn>
        </v-card>
    </v-form>
</template>

<script>
import DatePickerInput from '@/components/sub-components/inputs/DatePickerInput.vue';
import TextInput from '@/components/sub-components/inputs/TextInput.vue';
import DropdownInput from '@/components/sub-components/inputs/DropdownInput.vue';

// Insurance name dropdown items
const insuranceNameDropdownItems = [
    {
        text: 'Blue Cross Blue Shield',
        value: 'BLUE_CROSS_BLUE_SHIELD'
    },
    {
        text: 'Progressive',
        value: 'PROGRESSIVE'
    }
];

/**
 * Component for the patient enroll form.
 */
export default {
    components: { DropdownInput, DatePickerInput, TextInput },
    name: 'patient-enroll-form',

    data() {
        return {
            // Name of the person
            name: '',
            // Date of birth
            dateOfBirth: '',
            // Insurance name
            insuranceName: '',
            // Insurance group number
            groupNumber: '',
            // Insurance ID number
            idNumber: '',
            // Diagnosis code
            diagnosis: '',
            // Insurance name dropdown items
            insuranceNameDropdownItems: insuranceNameDropdownItems,
            // Whether or not the form is valid
            valid: false
        };
    },

    methods: {
        /**
         * Submits the form if the form is valid.
         */
        submit() {
          // Validate the form
          if (this.$refs.form.validate()) {
                console.log('The form is valid!');
          } else {
                console.log('The form is invalid.');
          }
        },

        /**
         * Generates a validation rules object using the error message passed in for a simple
         * required field.
         *
         * @param errorMessage - the error message to render if the validation is not met
         * @returns validation object
         */
        generateRequiredFieldValidationRules(errorMessage) {
            return [
                v => !!v || errorMessage
            ]
        }
    }
};
</script>

<style lang="less" scoped>
@import '../style/breakpoints';

.patient-enroll-form {
    @inline-input-spacing: 10px;

    .form-card {
        padding: 25px 50px;
    }

    .insurance-container {
        display: flex;
    }

    .insurance-input {
        flex: 1;

        &:first-child {
            margin-right: @inline-input-spacing;
        }

        &:last-child {
            margin-left: @inline-input-spacing;
        }
    }

    .submit-button {
        width: 100%;
        margin: 5px 0 0 0;
        color: white;
        font-size: 12px;
    }

    @media @break-mobile {
        .form-card {
            padding: 50px;
            width: 500px;
        }
    }
}
</style>
