<template>
  <ui-container>
    <ui-h1>2 Look</ui-h1>

    <ui-card>This is a card.</ui-card>
  </ui-container>
</template>

<script>
import {
  UiCard,
  UiContainer,
  UiH1,
} from '../../ui';

export default {
  name: 'TwoLook',

  components: {
    UiCard,
    UiContainer,
    UiH1,
  },
};
</script>
