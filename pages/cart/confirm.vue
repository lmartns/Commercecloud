<template>
  <div>
    <Nav />
    <br />
    <div class="text-center" v-if="$store.state.cart.cart.length == 0">
      <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
      <p>Carrinho Vazio</p>
    </div>
    <v-container>
      <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
        <v-btn nuxt to="/cart" min-width="150" min-height="45" depressed>
          Voltar
        </v-btn>
        <v-btn @click="process" min-width="150" min-height="45" color="primary">
          Prosseguir
        </v-btn>
      </div>
      <v-form lazy-validation ref="form" class="mt-10">
        <p class="font-weight-bold">Cadastro</p>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              outlined
              label="E-mail"
              type="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              outlined
              label="Nome completo"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="phone"
              outlined
              label="Telefone"
              type="tel"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="[rules.required]"
              outlined
              label="Endereço"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="city"
              :rules="[rules.required]"
              outlined
              label="Cidade"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="country"
              :rules="[rules.required]"
              outlined
              label="País"
              type="text"
            ></v-text-field>
          </v-col>
        </v-row>
        <p class="font-weight-bold">Cartão de crédito</p>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="cc"
              :rules="[rules.required]"
              outlined
              label="Número do cartao"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="expdate"
              :rules="[rules.required]"
              outlined
              label="Data de validade"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="cvv"
              :rules="[rules.required]"
              outlined
              label="CVV"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      <br /><br />
      <Footer />
      <ScrollTop />
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    async process() {
      if (!this.$refs.form.validate()) return;

      await this.$swal({
        title: "Processando pedido",
        icon: "info",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 3000,
        timerProgressBar: true,
        text: "Aguarde, por gentileza",
        showConfirmButton: false,
      });
      await this.$swal({
        title: "Pedido completo",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
        text: "Muito obrigado por comprar conosco ❤",
        showConfirmButton: false,
      });
      this.$store.commit("cart/ClearCart");
      this.$router.push("/");
    },
  },
  data() {
    return {
      email: null,
      name: null,
      phone: null,
      address: null,
      city: null,
      country: null,
      cc: "424242424242",
      expdate: "05/10",
      cvv: "123",
      rules: {
        required: (v) => !!v || "Required",
        email: (v) => {
          const pattern =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(v) || "E-mail inválido";
        },
      },
    };
  },
};
</script>

<style></style>
