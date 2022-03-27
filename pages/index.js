import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";

export default function Home() {


  return (
    <>
      <Meta
        description="Enhance your web dev skills along with other technical and personal skills with Garchi's Bootcamp"
        url={process.env.NEXT_PUBLIC_URL}
        title="Garchi Bootcamp"
      />

    
    </>
  );
}



Home.layout = "MainLayout";
