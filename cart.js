const submitFeatres = () => {
  const productInput = document.getElementById("productName");
  const takeProductInput = productInput.value;
  productInput.value = "";
  //
  const productQuentity = document.getElementById("productQuantity");
  const takeProductQuentity = productQuentity.value;
  productQuentity.value = "";
  console.log(takeProductInput, takeProductQuentity);
  //
  displayOutput(takeProductInput, takeProductQuentity);
  //
  saveProductToLocalStorage(takeProductInput, takeProductQuentity);
};

const displayOutput = (productName, productQuentity) => {
  const getdiv = document.getElementById("productsList");
  const createlist = document.createElement("li");
  createlist.innerText = `${productName}: ${productQuentity}`;
  getdiv.appendChild(createlist);
};

// stored kora data amra kivabe paitr pari seta, jodi thake taile ja ase dao, jodi na thake taile emply object dao.
const getstoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// Eibar jokon data set korbo, tokon ager je stored items ase oita r modde stringify kore new data rakbo.
const saveProductToLocalStorage = (product, quantity) => {
  const cart = getstoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// Stored kora item gula ekta ekta kore dekhanor kaj ta kortesi.
const displatProductsFromLocalStorage = () => {
  const savedCart = getstoredShoppingCart();
  console.log(savedCart);
  for (const singleItem in savedCart) {
    const quantity = savedCart[singleItem];
    console.log(singleItem, quantity);
    displayOutput(singleItem, quantity);
  }
};
displatProductsFromLocalStorage();
