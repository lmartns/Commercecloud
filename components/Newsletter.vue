<template>
  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <p class="text-md-h6 mt-5">Fique por dentro de todos os</p>
    <br />
    <h2 class="text-md-h3">
      Lançamentos <br />
      e Novidades!
    </h2>
    <br />
    <v-sheet color="transparent" class="mx-auto" max-width="400">
      <v-text-field
        label="Email"
        type="email"
        outlined
        v-model="email"
      ></v-text-field>
      <v-btn @click="submit" outlined min-height="50" block>Increva-se</v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async submit() {
      await this.$swal({
        title: "Obrigado por se inscrever!",
        icon: "success",
        allowOutisedClick: false,
        allowEscapeKey: false,
        timer: 4000,
        timeProgressBar: true,
        showConfirmButton: false,
        text: "Você será notificado com alertas do seu interesse, como produtos em  promoção e lançamentos",
      });
    },
  },
};
</script>

<style></style>
