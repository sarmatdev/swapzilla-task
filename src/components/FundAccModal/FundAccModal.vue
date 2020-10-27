<template>
  <v-dialog
    v-model="showDialog"
    max-width="780"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Fund Modal
      </v-btn>
    </template>
    <v-card>
      <v-toolbar light elevation="0">
        <v-tabs v-model="tab" color="dark" class="pa-4 ma-0">
          <v-tabs-slider color="dark"></v-tabs-slider>
          <v-tab v-for="tab in tabs" :key="tab.href">
            {{ tab.name }}
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn color="label" icon @click="showDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pa-10">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="tab in tabs" :key="tab.href">
            <component :is="tab.component" />
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import DepositTab from './Tabs/DepositTab';
import RebalanceTab from './Tabs/RebalanceTab';
import WithdrawTab from './Tabs/WithdrawTab';
export default {
  name: 'FundAccModal',
  components: {
    DepositTab,
    RebalanceTab,
    WithdrawTab,
  },
  data() {
    return {
      showDialog: true,
      tab: null,
      tabs: [
        {
          href: 'deposit',
          name: 'Deposit',
          component: 'DepositTab'
        },
        {
          href: 'withdraw',
          name: 'Withdraw',
          component: 'WithdrawTab'
        },
        {
          href: 'rebalance',
          name: 'Rebalance',
          component: 'RebalanceTab'
        }
      ],
    };
  },
};
</script>
