import Layout from "../../components/layout";
import Head from "next/head";
import getAllPostIds from "../../lib/allPostIds";
import getPostData from "../../lib/postData";
import { GetStaticProps, GetStaticPaths } from "next";
import CleanDate from "../../components/cleanDate";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

const folder = "items";

export default function Items({
  itemData,
}: {
  itemData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>Sample EC | {itemData.title}</title>
      </Head>
      <Image
        src={`/images/${itemData.id}.jpg`}
        alt={itemData.title}
        className="itemImage"
        width={400}
        height={400}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{itemData.title}</h1>
        <small className={utilStyles.lightText}>
          <CleanDate dateString={itemData.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: itemData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(folder);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const itemData =
    params && (await getPostData(params.id as string, folder as string));
  return {
    props: {
      itemData,
    },
  };
};
