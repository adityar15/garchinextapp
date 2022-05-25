import Meta from "../components/Meta";
import dynamic from "next/dynamic";
import { Title } from "@adiranids/react-tailwind";
import "@adiranids/react-tailwind/dist/style.css";


const CartTable = dynamic(() =>
  import(/*webpackChunkName:"carttable"*/ "../components/cart/CartTable")
);


export default function Cart({isLoggedIn}) {
  return (
    <>
      <Meta
        description="Enhance your web dev skills along with other technical and personal skills with Garchi's Bootcamp"
        url={process.env.NEXT_PUBLIC_URL}
        title="Garchi Bootcamp | Cart"
      />
      <div className="w-full h-full mt-6 space-y-5">
        <Title size="h1" className="text-center font-semibold">
          Cart
        </Title>
        <CartTable loggedIn={isLoggedIn} />
        
      </div>
    </>
  );
}

export async function getServerSideProps({req}) {

  return {
    props: {
      isLoggedIn: req.cookies.uid ? true : false,
    },
  };
}

Cart.layout = "MainLayout";
