// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { retrieveDataById,
         retrieveProducts,
 } from '../../utils/db/servicefirebase';

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const produk = req.query.produk;
    // produk bisa undefined, string, atau array
    if (Array.isArray(produk) && produk[1]) {
      const data = await retrieveDataById("products", produk[1]);
      if (!data) {
        res.status(404).json({ status: false, status_code: 404, data: null });
        return;
      }
      res.status(200).json({
        status: true,
        status_code: 200,
        data: data
      });
      return;
    } else {
      const data = await retrieveProducts("products");
      res.status(200).json({
        status: true,
        status_code: 200,
        data: data
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, status_code: 500, data: null });
  }
}