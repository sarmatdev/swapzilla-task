export default {
  data() {
    return {
      amountRules: [(v) => !!v || 'Amount is required'],
      exchangeRules: [(v) => !!v || 'Exchange is required'],
      currencyRules: [(v) => !!v || 'Currency is required'],
    }
  },
}