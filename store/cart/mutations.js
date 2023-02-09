export default {
  LoadCart(state) {
    let cart = localStorage.getItem("cloudCart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },
  AddToCart(state, product) {
    let itemFound = state.cart.find((p) => p.product.id === product.id);
    if (!itemFound) {
      state.cart.push({
        product,
        quantity: 1,
      });
    }
    if (itemFound) {
      itemFound.quantity += 1;
    }

    localStorage.setItem("cloudCart", JSON.stringify(state.cart));

    this.$swal({
      toast: true,
      text: "Adicionado ao carrinho",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity === 1) {
      state.cart.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
    this.$swal({
      toast: true,
      text: "Carrinho atualizado",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    localStorage.setItem("cloudCart", JSON.stringify(state.cart));
  },
  RemoveCarItem(state, index) {
    state.cart.splice(index, 1);
    this.$swal({
      toast: true,
      text: "Removido do carrinho",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    localStorage.setItem("cloudCart", JSON.stringify(state.cart));
  },
  IncreaseItemCount(state, index) {
    let item = state.cart[index];
    item.quantity += 1;
    this.$swal({
      toast: true,
      text: "Adicionado ao carrinho",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    localStorage.setItem("cloudCart", JSON.stringify(state.cart));
  },
  ClearCart(state) {
    state.cart = [];
    localStorage.removeItem("cloudCart");
  },
};
