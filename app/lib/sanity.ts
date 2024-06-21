import { createClient } from "next-sanity";

const client = createClient({
  apiVersion: "2023-05-03",
  projectId: "x8jxjokd",
  dataset: "production",
  useCdn: false,
});

export default client;
