// import { ProductType } from "@/types/Product.type";
import { ProductType } from "../../types/Product.type";
import styles from "../DetailProduct/detailProduct.module.scss";
import Image from "next/image";

const DetailProduk = ({ product }: { product: ProductType | null }) => {
    if (!product) {
        return <div>Produk tidak ditemukan.</div>;
    }
    return (
        <>
            <h1 className={styles.title}>Detail Produk</h1>
            <div className={styles.produkdetail}>
                <div className={styles.produkdetail__image}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className={styles.produkdetail__info}>
                    <h1 className={styles.produkdetail__name}>{product.name}</h1>
                    <p className={styles.produkdetail__category}>{product.category}</p>
                    <p className={styles.produkdetail__price}>
                        Rp {product.price && product.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </>
    );
};

export default DetailProduk;
