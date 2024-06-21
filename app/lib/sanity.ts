import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-05-03",
  projectId: "x8jxjokd",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
