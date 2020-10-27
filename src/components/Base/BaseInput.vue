<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    flat
    background-color="border"
    solo
    placeholder="Withdraw amount"
    :rules="rules"
    required
  >
  <slot></slot>
  </v-text-field>
</template>

<script>
export default {
name: 'BaseInput',
props: {
  value: [String, Number],
  rules: Array
}
}
</script>

<style>

</style>