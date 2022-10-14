// Get refrence to product grid
const productGrid = document.getElementById('productGrid')

// Get refrence to filter select
const categorySelect = document.getElementById('categorySelect')
let categoryInstance

// Prepare data
let productData

document.addEventListener('DOMContentLoaded', function () {
  // Init Parallax
  var elems = document.querySelectorAll('.parallax')
  M.Parallax.init(elems)

  // Fetch Products
  fetch('products.json')
    .then((response) =>
      // Parse response
      response.json()
    )
    .then((data) => {
      productData = data

      let categories = []

      data.forEach((product) => {
        // Add Category to categories array
        for (category of product.category) {
          if (!categories.includes(category)) {
            categories.push(category)

            const option = document.createElement('option')
            option.value = category
            option.innerText = category
            option.setAttribute('selected', 'selected')
            categorySelect.appendChild(option)
          }
        }
      })

      // Create Category Select
      categoryInstance = M.FormSelect.init(categorySelect)

      // Update when category is changed
      categorySelect.addEventListener('change', fillGrid)

      // Fill Grid
      fillGrid()
    })
})

function fillGrid() {
  // Empty product grid
  productGrid.innerHTML = ''

  // Create Cards:
  // Example Card:
  // <div class="col s12 m12 l4">
  //   <div class="card">
  //     <div class="card-image">
  //       <img src="products/melon.jpg">
  //       <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
  //     </div>
  //     <div class="card-content">
  //       <span class="card-title">Peeled Melon</span>
  //       <div class="chip">Category 1</div>
  //       <p>Geniessen sie den Luxus einer Melone, ohne einen Finger zu krümmen um diese ekelhaft schmeckende Schale zu entfernen.</p>
  //       <p><h4>2,99 €</h4> inkl. MwSt.</p>
  //     </div>
  //   </div>
  // </div>

  // Loop through products
  productData.forEach((product) => {
    // Check if product is in selected category
    // see https://materializecss.com/select.html
    const selectedCategories = categoryInstance.getSelectedValues()

    // Check if product is in selected category
    let inCategory = false
    for (selectedCategory of selectedCategories) {
      if (product.category.includes(selectedCategory)) {
        inCategory = true
      }
    }

    if (!inCategory) return

    // Create Card
    const wrapper = document.createElement('div')
    wrapper.classList.add('col', 's12', 'm12', 'l4')

    const card = document.createElement('div')
    card.classList.add('card')

    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image')

    const image = document.createElement('img')
    image.src = 'products/' + product.image

    const button = document.createElement('a')
    button.classList.add(
      'btn-floating',
      'halfway-fab',
      'waves-effect',
      'waves-light',
      'red'
    )
    button.innerHTML = '<i class="material-icons">add_shopping_cart</i>'

    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')

    const title = document.createElement('span')
    title.classList.add('card-title')
    title.innerText = product.title

    for (category of product.category) {
      const chip = document.createElement('div')
      chip.classList.add('chip')
      chip.innerText = category
      cardContent.appendChild(chip)
    }

    const description = document.createElement('p')
    description.innerText = product.description

    const price = document.createElement('p')
    if (!product.unit) {
      price.innerHTML = '<h4>' + product.price + ' €</h4> inkl. MwSt.'
    } else {
      price.innerHTML =
        '<h4>' + product.price + ' € / ' + product.unit + '</h4> inkl. MwSt.'
    }

    // Append Elements
    cardImage.appendChild(image)
    cardImage.appendChild(button)
    cardContent.appendChild(title)
    cardContent.appendChild(description)
    cardContent.appendChild(price)
    card.appendChild(cardImage)
    card.appendChild(cardContent)
    wrapper.appendChild(card)
    productGrid.appendChild(wrapper)
  })

  // If no products are in category, show message
  if (productGrid.innerHTML == '') {
    productGrid.innerHTML =
      '<div class="col s12"><h4>Keine Produkte mit den angegebenen Filtern</h4></div>'
  }
}
