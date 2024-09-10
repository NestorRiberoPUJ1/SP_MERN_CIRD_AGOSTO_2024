import Product from "./components/Product"



const products = [
  {
    name: 'Laptop',
    price: 1000,
    description: 'This is a laptop',
    url: 'https://picsum.photos/200/300'
  },
  {
    name: 'Mobile',
    price: 500,
    description: 'This is a mobile',
    url: 'https://picsum.photos/200/300'
  },
  {
    name: 'Tablet',
    price: 250,
    description: 'This is a tablet',
    url: 'https://picsum.photos/200/300'
  }
]



const App = () => {

  return (
    <>
      <h1>Mis Productos</h1>
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
    </>
  )
}

export default App
