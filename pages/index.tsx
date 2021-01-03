import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import getSortedPostsData from "../lib/sortedPostsData";
import { GetStaticProps } from "next";
import ItemList from "../components/itemList";
import ArticleList from "../components/articleList";
import CleanDate from "../components/cleanDate";
import { articleMetaData, itemMetaData } from "../types/interfaces";

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
  allArticlesData: articleMetaData[];
  allItemsData: itemMetaData[];
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

  // Item Data
  const allItemsData = getSortedPostsData("items");

  return {
    props: {
      allArticlesData,
      allItemsData,
    },
  };
};
