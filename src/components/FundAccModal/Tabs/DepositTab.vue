<template>
  <BaseForm v-model="valid">
    <v-row>
      <v-col cols="6" offset="3">
        <v-row>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="exchanges"
              v-model="exchange"
              :rules="exchangeRules"
              placeholder="Choose exchange"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <BaseSelect
              :items="currencies"
              v-model="currency"
              :rules="amountRules"
              placeholder="Choose currency"
            />
          </v-col>
          <v-col cols="12" class="pa-0">
            <div class="d-flex justify-center mb-6">
              <qrcode-vue
                :value="exchange + currency || wallet"
                level="H"
              ></qrcode-vue>
            </div>
          </v-col>
          <v-col cols="12" class="pa-0 text-center">
            <p class="body-1 ma-0">
              FGBfvcnkfdnvkk74365832ybvcvdfvfvb
            </p>
          </v-col>
          <v-col cols="12" class="mt-5 pa-0 mb-5">
            <v-btn block large color="primary" :disabled="!valid">Copy</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </BaseForm>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

import BaseForm from '@/components/Base/BaseForm';
import BaseSelect from '@/components/Base/BaseSelect';

import validationRules from '@/mixins/validationRules';
export default {
  name: 'tabDeposit',
  mixins: [validationRules],
  components: {
    BaseSelect,
    BaseForm,
    QrcodeVue,
  },
  data() {
    return {
      valid: true,
      exchange: null,
      currency: null,
      exchanges: ['BitMEX', 'Bitfinex', 'Binance'],
      currencies: ['BTC', 'ETH', 'SWZL'],
      wallet: 'FGBfvcnkfdnvkk74365832ybvcvdfvfvb',
    };
  },
};
</script>

<style scoped></style>
