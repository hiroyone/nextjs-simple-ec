import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import getSortedPostsData from "../lib/sortedPostsData";
import { GetStaticProps } from "next";
import ItemList from "../components/itemList";
import ArticleList from "../components/articleList";
import CleanDate from "../components/cleanDate";

/**
 * Get a date in a ISO date format
 * @constant
 * @type {string}
 * @default
 */
const todayDate: string = new Date().toISOString();

export default function Home({
  allArticlesData,
  allItemsData,
}: {
  allArticlesData: {
    date: string;
    title: string;
    id: string;
  }[];
  allItemsData: {
    date: string;
    title: string;
    id: string;
    price: number;
    category: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>Sample EC | Top</title>
      </Head>
      {/* Counter */}
      <p>
        Welcome! Today is <CleanDate dateString={todayDate} />
      </p>
      <Image
        src="/images/ecommerce.jpg"
        alt="Item A"
        className="itemImage"
        width={600}
        height={400}
      />

      <ItemList allItemsData={allItemsData} />
      <ArticleList allArticlesData={allArticlesData} />
    </Layout>
  );
}

/**
 * Return an external data fetched upon build
 * @function
 * @type {function}
 * @default
 */
export const getStaticProps: GetStaticProps = async () => {
  // Article Data
  const allArticlesData = getSortedPostsData("articles");
  console.log(allArticlesData);

  // Item Data
  const allItemsData = getSortedPostsData("items");
  console.log(allItemsData);

  return {
    props: {
      allArticlesData,
      allItemsData,
    },
  };
};
