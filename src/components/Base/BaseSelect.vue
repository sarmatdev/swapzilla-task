<template>
  <div>
    <p v-if="header" class="pa-0 pt-2 px-3 pb-0 mb-2">{{ header }}</p>
    <v-select
      :items="items"
      :value="value"
      flat
      background-color="border"
      color="dark"
      solo
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
      :placeholder="placeholder"
      :rules="rules"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    value: String,
    items: Array,
    placeholder: String,
    header: String,
    rules: Array
  },
  // props: ['value', 'items', 'placeholder', 'header'],
};
</script>

<style></style>
