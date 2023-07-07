type Img = { url: string };

export async function fetchCatImg(): Promise<Img> {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const images: unknown = await response.json();

  if (!Array.isArray(images)) {
    throw new Error("猫の画像の取得に失敗しました");
  }
  return images[0];
}
