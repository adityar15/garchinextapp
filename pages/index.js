import Meta from "../components/Meta";
import dynamic from 'next/dynamic';
import { api, localapi } from "../assets/api";
import { useState } from "react";

const ProductList = dynamic(()=>import(/*webpackChunkName:"productlist"*/ '../components/product/ProductList'))
const Filter = dynamic(()=>import(/*webpackChunkName:"filter"*/ '../components/product/Filter'))

export default function Home({products}) {

  const [productList, setProductList] = useState(products)

  function filterApplied(payload)
  {
    localapi.post('/filterproducts', payload).then(res => setProductList(res.data.products.data)).catch(err => console.log("errors", err))
  }

  return (
    <>
      <Meta
        description="Enhance your web dev skills along with other technical and personal skills with Garchi's Bootcamp"
        url={process.env.NEXT_PUBLIC_URL}
        title="Garchi Bootcamp"
      />
      <div className="flex w-full h-full">
      <Filter applyFilter={filterApplied} />
      <ProductList products={productList} />
      </div>
    </>
  );
}


export async function getStaticProps(context){

  const response = await api.get("/products")
  const products = await response.data


  return{
    props: {
      products: products.data
    },
    revalidate: 3600 //seconds
  }
}



Home.layout = "MainLayout";
