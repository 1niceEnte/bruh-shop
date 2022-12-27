// Get refrence to product grid
const productGrid = document.getElementById('productGrid')

// Get refrence to filter select
const categorySelect = document.getElementById('categorySelect')
let categoryInstance

// Prepare data so we can access it from the whole script
let productData

document.addEventListener('DOMContentLoaded', function () {
  // Init Parallax
  const parallaxElement = document.querySelectorAll('.parallax')
  M.Parallax.init(parallaxElement)

  const FABElements = document.querySelectorAll('.fixed-action-btn')
  M.FloatingActionButton.init(FABElements)

  // Fetch Products
  fetch('products.json')
    .then((response) =>
      // Parse response as JSON
      response.json()
    )
    .then((data) => {
      // Save data to global variable
      productData = data

      // Set the category select to allow dynamic filtering
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

      // Create Category Select & store instance in global variable
      categoryInstance = M.FormSelect.init(categorySelect)

      // Update when category is changed
      categorySelect.addEventListener('change', fillGrid)

      // Fill Grid
      fillGrid()
    })
})

// Method to fill the grid with products based on the category
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

    // If product is not in any selected category, skip it
    if (!inCategory) return

    // Create Wrapper
    const wrapper = document.createElement('div')
    wrapper.classList.add('col', 's12', 'm12', 'l6', 'xl4')

    // Create Card
    const card = document.createElement('div')
    card.classList.add('card', 'hoverable')

    // Create Card Image Wrapper
    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image')

    // Create Card Image
    const image = document.createElement('img')
    image.src = 'products/' + product.image
    image.style = 'object-fit: cover;'
    image.height = 300
    image.className = 'materialboxed'
    image.setAttribute(
      'data-caption',
      `${product.title} - ${product.description}`
    )

    // Create Card Image Button
    const button = document.createElement('a')
    button.classList.add(
      'btn-floating',
      'halfway-fab',
      'waves-effect',
      'waves-light',
      'red'
    )
    button.innerHTML = '<i class="material-icons">add_shopping_cart</i>'
    button.onclick = () => {
      // Show Toast with product name
      M.toast({
        html: `<img src="images/icon.png" style="height:24px;margin-right:5px"><span>${product.title} zum Warenkorb hinzugefügt</span>`,
      })
      addToCart(product.id)
    }

    // Create Card Content
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')

    // Create Card Title
    const title = document.createElement('span')
    title.classList.add('card-title')
    title.innerText = product.title

    // Create Card Category Chips
    for (category of product.category) {
      const chip = document.createElement('div')
      chip.classList.add('chip')
      chip.innerText = category

      if (category == 'Neu') {
        const icon = document.createElement('i')
        icon.classList.add('close', 'material-icons')
        icon.innerText = 'new_releases'
        icon.style.cursor = 'initial'
        icon.style['pointer-events'] = 'none'
        chip.prepend(icon)
      }

      cardContent.appendChild(chip)
    }

    // Create Card Description
    const description = document.createElement('p')
    description.innerText = product.description

    // Create Card Price
    const price = document.createElement('p')

    // Format Price
    const priceString = product.price.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })

    if (!product.unit) {
      // If no unit is specified, don't show it
      price.innerHTML = '<h4>' + priceString + ' </h4> inkl. MwSt.'
    } else {
      // If unit is specified, show it
      price.innerHTML =
        '<h4>' + priceString + ' / ' + product.unit + '</h4> inkl. MwSt.'
    }

    // Append Elements to Body
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

  // Mount materialboxed
  const materialboxed = document.querySelectorAll('.materialboxed')
  M.Materialbox.init(materialboxed)
}

// Get last commit date
fetch('https://api.github.com/repos/1niceEnte/bruh-shop/commits/main')
  .then((res) => res.json())
  .then((data) => {
    // Last Updated intl german relative
    const lastUpdated = new Date(data.commit.author.date)
    const lastUpdatedIntl = new Intl.RelativeTimeFormat('de', {
      numeric: 'auto',
    })
    const lastUpdatedRelative = lastUpdatedIntl.format(
      Math.round((lastUpdated - Date.now()) / 1000 / 60 / 60 / 24),
      'day'
    )

    document.getElementById(
      'lastUpdated'
    ).innerText = `Letztes Update: ${lastUpdatedRelative}`
  })

// Update year
document.getElementById('copyrightYear').innerText = new Date().getFullYear()
