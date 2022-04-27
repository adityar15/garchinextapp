import Image from "next/image";
import { Title } from "@adiranids/react-tailwind";
import "@adiranids/react-tailwind/dist/style.css";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import dynamic from 'next/dynamic'

const AddToCart = dynamic(import(/*webpackChunkName:"addtocart"*/ '../cart/AddToCart'))



export function Details({ id, name, price, description, attributes }) {
  const [cleanDescription, setCleanDescription] = useState("");

  useEffect(() => {
    DOMPurify.addHook("uponSanitizeElement", (node, data) => {
      if (data.tagName == "iframe") {
        const allowedSRC = "https://www.youtube.com/embed";
        const src = node.getAttribute("src");
        if (!src.startsWith(allowedSRC)) {
          return node.parentNode?.removeChild(node);
        }
      }
    });
  }, []);

  useEffect(() => {
    const cleanHTML = DOMPurify.sanitize(description, {
      USE_PROFILES: { html: true },
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["autoplay", "allowfullscreen", "frameborder", "scrolling"],
    });
    setCleanDescription(cleanHTML);
  }, [description]);

  return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-3 py-8">
      <Title size="h1">{name}</Title>
      <Title size="h3">GBP {price}</Title>
      <Title size="h3" className="font-bold">
        Description
      </Title>
      <AddToCart productID={id} name={name} attributes={attributes} />
      <p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p>
    </div>
  );
}

export function Images({ mainImage, otherImages = [] }) {
  return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="md:w-full lg:w-[380px] h-[400px] sm:rounded-lg sm:overflow-hidden relative">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={mainImage}
          alt="Product Image"
        />
      </div>
      {otherImages.length > 0 && (
        <>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden relative">
              {otherImages[0] && (
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={otherImages[0]}
                  alt="Image"
                />
              )}
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden relative">
              {otherImages[1] && (
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={otherImages[1]}
                  alt="Image"
                />
              )}
            </div>
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block relative">
            {otherImages[2] && (
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={otherImages[2]}
                alt="Image"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
