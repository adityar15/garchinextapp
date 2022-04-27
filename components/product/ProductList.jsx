import {Title} from '@adiranids/react-tailwind'
import '@adiranids/react-tailwind/dist/style.css'
import dynamic from 'next/dynamic'

const ProductCard = dynamic(()=>import(/*webpackChunkName:"productcard"*/'./ProductCard'))



export default function ProductList({products}) {
  return (
    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Title size="h1">Courses</Title>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  </div>
  )
}
