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
      <h1 className="font-bold text-3xl text-center mb-4">Daftar Produk</h1>
      {/* tinggal tampilkan produk dengan tabel dibawah ini, lanjut besok */}
      <div className="mx-auto max-w-6xl overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-9/10">
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
    </>
  );
}
