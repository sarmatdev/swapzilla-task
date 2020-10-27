<template>
  <v-form :value="value" @input="$emit('input', $event)" lazy-validation>
    <v-container class="pa-0">
      <slot></slot>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    value: Boolean,
  },
};
</script>

<style></style>
