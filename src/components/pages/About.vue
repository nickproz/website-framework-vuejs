<template>
  <div class="about">
    <patient-enroll-form></patient-enroll-form>
  </div>
</template>

<script>
  import PatientEnrollForm from "@/components/PatientEnrollForm.vue";

  /**
   * Component for the about page.
   */
  export default {
    name: 'about',
    components: { PatientEnrollForm }
  };
</script>

<style lang="less" scoped>
  .about {}
</style>
