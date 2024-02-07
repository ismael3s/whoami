import axios from "axios";

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
  const result = new TextDecoder().decode(arraybuffer.data);
  return new Response(result, {
    headers: {
      "content-type": "application/json"
    }
  });
}
