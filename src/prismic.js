import prismic from "@prismicio/client";

export const client = prismic.createClient("spyrath-dev");

const routes = [
  {
    type: "pages",
    path: "/:uid",
  },
];