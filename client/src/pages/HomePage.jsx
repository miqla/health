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
      <h1 className="font-bold text-3xl">Daftar Produk</h1>
      {/* tinggal tampilkan produk dengan tabel dibawah ini, lanjut besok */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        dicta officia autem sequi molestiae maiores.
      </p>
    </>
  );
}
