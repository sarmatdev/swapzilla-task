<template>
  <BaseForm v-model="valid">
    <v-row>
      <v-col cols="6" offset="3">
        <v-row>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="exchanges"
              v-model="exchange"
              placeholder="Choose exchange"
              :rules="exchangeRules"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="currencies"
              v-model="currency"
              placeholder="Choose currency"
              :rules="currencyRules"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="amount"
              :rules="amountRules"
              flat
              background-color="border"
              solo
              placeholder="Withdraw amount"
            >
              <template v-slot:append>
                <v-btn color="label" elevation="0" dark small @click="amount = balance ">Max</v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" class="pa-0">
            <v-btn block color="primary" large :disabled="!valid"
              >Withdraw</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/Base/BaseForm';
import BaseSelect from '@/components/Base/BaseSelect';

import validationRules from '@/mixins/validationRules';
export default {
  name: 'WithdrawTab',
  mixins: [validationRules],
  components: {
    BaseForm,
    BaseSelect,
  },
  data() {
    return {
      valid: true,
      balance: 0.04763864,
      amount: null,
      exchanges: ['BitMEX', 'Bitfinex', 'Binance'],
      exchange: null,
      currencies: ['BTC', 'ETH', 'SWZL'],
      currency: null,
    };
  },
  methods: {
    setMaxAmount() {
      this.amount = this.balance;
    },
  },
};
</script>
