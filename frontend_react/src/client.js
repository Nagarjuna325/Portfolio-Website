import { createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// console.log("Sanity Project ID:", process.env.REACT_APP_SANITY_PROJECT_ID);
// console.log("Sanity Token:", process.env.REACT_APP_SANITY_TOKEN);

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-07-08",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);