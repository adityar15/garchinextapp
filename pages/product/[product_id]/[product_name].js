import dynamic from "next/dynamic";
import { api } from "../../../assets/api";
import Meta from "../../../components/Meta";

const Images = dynamic(() =>
  import(
    /*webpackChunkName:"productdetailsimages"*/ "../../../components/product/ProductDetails"
  ).then(module => module.Images)
);

const Details = dynamic(() =>
  import(
    /*webpackChunkName:"productdetails"*/ "../../../components/product/ProductDetails"
  ).then(module => module.Details)
);


export default function SingleProductPage({ product }) {
  // console.log(product.main_image)
  return (
    <div className="overflow-auto">
      <Meta title={product.name} description={product.one_liner} />
      <Images mainImage={product.main_image} otherImages={product.other_images} />
      <Details id={product.product_id} name={product.name} price={product.price} description={product.description} attributes={product.attributes} />
    </div>
  );
}

export async function getServerSideProps({ params, res }) {
  const apiresponse = await api.get(`/product/${params.product_id}`)
  const product = await apiresponse.data
  console.log(product.data[0])
  return {
    props: {
      product: product.data[0],
    },
  };
}
