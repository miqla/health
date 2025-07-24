import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      //   kalau pakai map jangan lupa tambahin .docs, kalau forEach gaperlu .docs
      const result = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setProducts(result);
    }
    getProducts();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-6xl w-9/10 flex flex-col">
        <h1 className="font-bold text-3xl text-center mb-3">Daftar Produk</h1>
        <button className="btn self-end mb-2 w-max">Add Data</button>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* looping rows */}
              {products?.map((product, index) => (
                <tr key={product.id}>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>
                    <img
                      width="150px"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
