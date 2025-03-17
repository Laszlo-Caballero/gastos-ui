import { envConfig } from "@/config/envConfig";
import { MaximumQuantity, ResumenBody } from "@/types/types";
import axios from "axios";

export async function GetResumen(token?: string): Promise<ResumenBody> {
  const res = await axios.get(`${envConfig.API_URL}/auth/resumen`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.body;
}
