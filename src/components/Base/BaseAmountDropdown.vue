<template>
  <v-autocomplete
    :value="value"
    @input="$emit('input', $event)"
    flat
    color="info"
    solo
    background-color="border"
    placeholder="Amount"
  >
    <template v-slot:no-data>
      <v-row class="ma-0" style="max-width: 360px;">
        <v-col cols="12">
          <v-chip text-color="primary" label class="chip">
            Balance: &nbsp; <strong>{{ balance }}</strong>
          </v-chip>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-start">
            <v-btn
              v-for="option in balanceOptions"
              :key="option.value"
              color="label"
              class="ma-1"
              small
              dark
              @click="calculateAmount(option.value)"
              >{{ option.text }}</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'BaseAmountDropdown',
  props: {
    value: [String, Number],
    balance: Number,
  },
  data() {
    return {
      // balanceOptions: ['10%', '25%', '50%', '100%', 'Split'],
      balanceOptions: [
        {
          text: '10%',
          value: 10
        },
        {
          text: '25%',
          value: 25
        },
        {
          text: '50%',
          value: 50
        },
        {
          text: '100%',
          value: 100
        },
        {
          text: 'Split',
          value: 'split'
        },
      ],
    };
  },
  methods: {
    calculateAmount(option) {
      console.log(option)
      const balance = this.balance / option
      this.$emit('input', balance)
    }
  },
};
</script>

<style scoped>
.chip {
  font-size: 12px;
  color: #2A6591;
  font-weight: normal;
}
</style>
