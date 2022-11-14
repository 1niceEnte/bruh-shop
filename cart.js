// Shoppingn Cart Logic

let discountData
// Load discount code from json
fetch('discounts.json')
  .then((response) => response.json())
  .then((data) => {
    // Save data to global variable
    discountData = data
  })

const discountCode = document.getElementById('discountCode')
const applyDiscountCode = document.getElementById('applyDiscountCode')
const totalPrice = document.getElementById('totalPrice')

// Add Event Listener to apply discount button
applyDiscountCode.addEventListener('click', applyDiscount)

function applyDiscount() {
  // Get discount code from input
  const code = discountCode.value

  // Check if code is valid
  const discount = discountData.find((discount) => discount.code === code)

  if (discount) {
    // Get total price
    const totalPrice = cartData.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )

    // Calculate new price
    const newPrice = totalPrice * discount.factor + discount.amount;

    // Update price
    document.getElementById('totalPrice').innerText = newPrice.toLocaleString(
      'de-DE',
      {
        style: 'currency',
        currency: 'EUR',
      }
    )
  } else {
    // Show error
    M.toast({ html: 'Invalid Discount Code' })
  }
}

// Modal Instance
let modalInstance
document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('cartModal')
  modalInstance = M.Modal.init(modalElement, {
    onOpenStart,
  })
})

// Get local storage data
const cartData = JSON.parse(localStorage.getItem('cart')) || []

const cartItemCount = document.getElementById('cartItemCount')
function updateCartItemCount() {
  cartItemCount.innerText = cartData.reduce(
    (total, product) => total + product.quantity,
    0
  )
}
updateCartItemCount()

function addToCart(id) {
  // Find Element in cartData
  const product = productData.find((product) => product.id === id)
  // Check if product is already in cart
  const productInCart = cartData.find((product) => product.id === id)
  if (productInCart) {
    // Increase quantity
    productInCart.quantity++
  } else {
    // Add product to cart
    cartData.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartItemCount()
  // Update local storage
  localStorage.setItem('cart', JSON.stringify(cartData))
}

function removeFromCart(id) {
  // Find Element in cartData
  const productInCart = cartData.find((product) => product.id === id)
  if (productInCart) {
    // Decrease quantity
    productInCart.quantity--
    if (productInCart.quantity <= 0) {
      // Remove product from cart
      cartData.splice(cartData.indexOf(productInCart), 1)
    }
  }

  updateCartItemCount()
  // Update local storage
  localStorage.setItem('cart', JSON.stringify(cartData))
}

const cartItemList = document.getElementById('cartItemList')
// Method to fill the cart modal
const onOpenStart = function () {
  cartItemList.innerHTML = ''

  // <li class="collection-item avatar">
  //     <img src="images/yuna.jpg" alt="" class="circle" />
  //     <span class="title">Title</span>
  //     <p>
  //         First Line <br />
  //         Second Line
  //     </p>
  //     <a href="#!" class="secondary-content"
  //         ><i class="material-icons">grade</i></a
  //     >
  // </li>

  for (const product of cartData) {
    const li = document.createElement('li')
    li.classList.add('collection-item', 'avatar')
    li.innerHTML = `
        <img src="products/${product.image}" alt="" class="circle" />
        <span class="title">${product.quantity}x ${product.title}</span>
        <p>
            á ${product.price.toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })} ${product.unit ? '/ ' + product.unit : ''}   
        </p>
        <p class="secondary-content" style="color:black;"
            >${(product.price * product.quantity).toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}</p
        >
    `
    cartItemList.appendChild(li)
  }

  // Total Price Item
  const totalPriceItem = document.createElement('li')
  totalPriceItem.classList.add('collection-item', 'active')
  totalPriceItem.innerHTML = `
        <span class="title">Total Price</span>
        <p class="right" style="margin:0;">${cartData
          .reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })}</p
        >
    `
  cartItemList.appendChild(totalPriceItem)

  totalPrice.innerText = cartData
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })
}
