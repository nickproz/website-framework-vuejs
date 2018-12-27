<template>
    <div class="input-label">
        <h5 class="label">{{ label }}</h5>
    </div>
</template>

<script>
export default {
    name: 'input-label',

    props: {
        // The label text to render
        label: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="less" scoped>
.input-label {
    .label {
        text-align: left;
        padding-bottom: 5px;
    }
}
</style>
