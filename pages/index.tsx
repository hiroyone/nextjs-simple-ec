import Head from "next/head";
import Layout from "../components/layout";
import getSortedPostsData from "../lib/sortedPostsData";
import { GetStaticProps } from "next";
import ItemList from "../components/itemList";
import ArticleList from "../components/articleList";
import CleanDate from "../components/cleanDate";
import { articleMetaData, itemMetaData } from "../types/interfaces";
import React from "react";
import ImageModal from "../components/imageModal";

/**
 * Get a date in a ISO date format
 * @constant
 * @type {string}
 * @default
 */
const todayDate: string = new Date().toISOString();
const mainImage = "ecommerce";

export default function Home({
  allArticlesData,
  allItemsData,
}: {
  allArticlesData: articleMetaData[];
  allItemsData: itemMetaData[];
}): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>Sample EC | Top</title>
      </Head>
      <p>
        Welcome! Today is <CleanDate dateString={todayDate} />
      </p>
      <ImageModal mainImage={mainImage} />
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
