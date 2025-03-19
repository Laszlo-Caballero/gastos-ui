import { envConfig } from "@/config/envConfig";
import { ResponsiveMaximumQuantity, ResumenBody } from "@/types/types";
import axios from "axios";

export async function GetResumen(token?: string): Promise<ResumenBody> {
  const res = await axios.get(`${envConfig.API_URL}/auth/resumen`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.body;
}

export async function GetMaximumQuantity(
  token?: string,
  limit?: number,
  page?: number
): Promise<ResponsiveMaximumQuantity> {
  const res = await axios.get(
    `${envConfig.API_URL}/maximum-quantity?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.body;
}
