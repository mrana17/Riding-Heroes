// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, orderList, createOrderDoc } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      const list = await orderList("Orders");
      res.status(200).json(list);
    }

    if (req.method === "POST") {
      createOrderDoc(req.body).then(() => {
        res.status(200).json(req.body);
      });
      res.status;
    }
  }
);
