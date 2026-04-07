
import { useRouter } from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduct';
import { ProductType } from '../../types/Product.type';

const fetcher = (url: string) => fetch(url).then((res) => res.ok ? res.json() : null);

export default function ProdukDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR<ProductType>(id ? `/api/produk/${id}` : null, fetcher);

  if (error) return <div>Terjadi kesalahan saat mengambil data.</div>;
  if (!data) return <div>Loading...</div>;
  return <DetailProduk product={data} />;
}
