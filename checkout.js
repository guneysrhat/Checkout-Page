const TexRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //! set items to localStorage
  localStorage.setItem("TexRate", TexRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //! set items to sessionStorage
  sessionStorage.setItem("TexRate", TexRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});


