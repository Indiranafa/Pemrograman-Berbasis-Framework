import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
}

const kategori = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const {push} = useRouter();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     if (!isLogin) {
    //         push("/auth/login");
    //     }
    // },[]);

    // Fungsi untuk fetch data produk
    const fetchProducts = () => {
        fetch("/api/produk")
        .then((response) => response.json())
        .then((responsedata) => {
            setProducts(responsedata.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    // Fetch data saat pertama kali render
    useEffect(() => {
        fetchProducts();
    }, []);

    // Fungsi untuk tombol refresh
    const handleRefresh = () => {
        fetchProducts();
    };

    return (
        <div>
            <h1>Daftar Produk</h1>
            <button onClick={handleRefresh}>Refresh</button>
            {products.map((product:ProductType) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                    <p>Kategori: {product.category}</p>
                </div>
            ))}
        </div>
    )
}

export default kategori;