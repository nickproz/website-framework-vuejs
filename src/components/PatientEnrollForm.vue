<template>
    <div class="patient-enroll-form">
        <v-card class="form-card" @keydown.enter="submit()">
            <!-- Name of patient -->
            <text-input
              v-model="name"
              label="Name of patient"
              placeholder="First and last name"
            ></text-input>

            <!-- Date of birth -->
            <date-picker-input
              v-model="dateOfBirth"
              color="theme"
              label="Date of birth"
            ></date-picker-input>

            <!-- Insurance name -->
            <dropdown-input
                v-model="insuranceName"
                color="theme"
                placeholder="Select insurance"
                label="Insurance name"
                :items="insuranceNameDropdownItems"
            ></dropdown-input>

            <!-- Insurance information -->
            <div class="insurance-container">
                <!-- Group number -->
                <text-input
                  class="insurance-input"
                  v-model="groupNumber"
                  label="Group no."
                  placeholder="Enter group number"
                ></text-input>

                <!-- ID number -->
                <text-input
                  class="insurance-input"
                  v-model="idNumber"
                  label="ID no."
                  placeholder="Enter id number"
                ></text-input>
            </div>

            <!-- Diagnosis -->
            <text-input
              v-model="diagnosis"
              label="Diagnosis"
              placeholder="Enter diagnosis code"
            ></text-input>

            <!-- Submit button -->
            <v-btn depressed large color="theme" @click="submit()" class="submit-button">Next</v-btn>
        </v-card>
    </div>
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
            name: null,
            // Date of birth
            dateOfBirth: null,
            // Insurance name
            insuranceName: null,
            // Insurance group number
            groupNumber: null,
            // Insurance ID number
            idNumber: null,
            // Diagnosis code
            diagnosis: null,
            // Insurance name dropdown items
            insuranceNameDropdownItems: insuranceNameDropdownItems
        };
    },

    methods: {
        submit() {
            alert('Form submitted!');
        }
    }
};
</script>

<style lang="less" scoped>
@import '../style/breakpoints';

.patient-enroll-form {
    @inline-input-spacing: 10px;

    .form-card {
        padding: 15px 50px;
    }

    .insurance-container {
        display: flex;
    }

    .insurance-input {
        flex-grow: 1;

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
