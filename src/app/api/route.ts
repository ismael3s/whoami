import axios from "axios";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { data } = await axios.get(
    "https://api.github.com/repos/ismael3s/dockerise/releases/latest"
  );
  const asset = data.assets
    .filter((asset: { name: string }) => asset.name === "latest.json")
    .at(0);
  const downloadUrl = asset.browser_download_url;
  const arraybuffer = await axios.get(downloadUrl, {
    responseType: "arraybuffer"
  });
  return Response.json(JSON.parse(new TextDecoder().decode(arraybuffer.data)));
}
