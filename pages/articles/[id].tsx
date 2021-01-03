import Layout from "../../components/layout";
import Head from "next/head";
import getAllPostIds from "../../lib/allPostIds";
import getPostData from "../../lib/postData";
import { GetStaticProps, GetStaticPaths } from "next";
import CleanDate from "../../components/cleanDate";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import { articleData } from "../../types/interfaces";

const folder = "articles";

export default function Article({ articleData }: { articleData: articleData }) {
  return (
    <Layout>
      <Head>
        <title>Sample EC | {articleData.title}</title>
      </Head>
      <Image
        src={`/images/${articleData.id}.jpg`}
        alt={articleData.title}
        className="articleImage"
        width={400}
        height={400}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{articleData.title}</h1>
        <small className={utilStyles.lightText}>
          <CleanDate dateString={articleData.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
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
  const articleData =
    params && (await getPostData(params.id as string, folder as string));
  return {
    props: {
      articleData,
    },
  };
};
