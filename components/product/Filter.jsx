import { Title, Button } from "@adiranids/react-tailwind";
import "@adiranids/react-tailwind/dist/style.css";
import { useState, useEffect } from "react";
import { localapi } from "../../assets/api";

export default function Filter({ applyFilter }) {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState("");

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    localapi.get("/getcategories").then((res) => setCategoryList(res.data.categories));
  }, []);

  function apply(e) {
    e.preventDefault();
    applyFilter({
      categories: [category],
      priceOrder: price,
    });
  }

  return (
    <form
      onSubmit={apply}
      className="flex flex-col space-y-6 divide-y-2 divide-gray-600 md:w-48 p-3 shadow shadow-gray-200 border border-gray-100 ring ring-black/5"
    >
      <div className="divide-y divide-gray-400 flex flex-col space-y-4 p-4">
        <Title size="h4">Categories</Title>
        <ul className="py-3">
          {categoryList.length > 0 && categoryList.map((category) => (
            <li key={category.id}>
              <input
                type="radio"
                value={category.id}
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              />
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="divide-y divide-gray-400 flex flex-col space-y-4 p-4">
        <Title size="h4">Price</Title>
        <ul className="py-3">
          <li>
            <input
              type="radio"
              value="low-high"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
            Low to High
          </li>
          <li>
            <input
              type="radio"
              value="high-low"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />{" "}
            High to Low
          </li>
        </ul>
      </div>

      <div className="py-6">
        <Button type="submit" buttonType="secondary">
          Apply
        </Button>
      </div>
    </form>
  );
}
