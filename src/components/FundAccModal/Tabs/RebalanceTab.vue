<template>
  <BaseForm v-model="valid">
    <v-row>
      <v-col cols="6" offset="3">
        <v-row>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="exchanges"
              v-model="exchangeFrom"
              :rules="exchangeRules"
              header="From"
              placeholder="Choose exchange"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="exchanges"
              v-model="exchangeTo"
              :rules="exchangeRules"
              header="To"
              placeholder="Choose exchange"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="currencies"
              v-model="currency"
              :rules="currencyRules"
              placeholder="Choose currency"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <BaseAmountDropdown v-model="amount" :balance="balance" />
          </v-col>
          <v-col cols="12" class="px-0">
            <v-btn block color="primary" large :disabled="!valid"
              >Rebalance</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/Base/BaseForm';
import BaseAmountDropdown from '@/components/Base/BaseAmountDropdown';
import BaseSelect from '@/components/Base/BaseSelect';

import validationRules from '@/mixins/validationRules';
export default {
  name: 'RebalanceTab',
  mixins: [validationRules],
  components: {
    BaseAmountDropdown,
    BaseSelect,
    BaseForm,
  },
  data() {
    return {
      valid: true,
      amount: 10,
      exchanges: ['BitMEX', 'Bitfinex', 'Binance'],
      exchangeFrom: null,
      exchangeTo: null,
      currencies: ['BTC', 'ETH', 'SWZL'],
      currency: null,
      balance: 0.04763864,
    };
  },
};
</script>

<style scoped lang="scss">
.balanceChip {
  font-size: 0.75rem;
  background-color: rgba(42, 101, 145, 0.1) !important;
}
</style>
