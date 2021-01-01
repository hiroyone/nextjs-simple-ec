import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

/**
 * Get a date in a ISO date format
 * @constant
 * @type {String}
 * @default
 */
const today: String = (() => {
  const todayDate: Date = new Date();
  const dd: String = `${todayDate.getDate()}`.padStart(2, "0");
  const mm: String = `${todayDate.getMonth() + 1}`.padStart(2, "0"); //January is 0!
  const yyyy: String = String(todayDate.getFullYear());
  return yyyy + "-" + mm + "-" + dd;
})();

const ArticleList = ({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string };
}): JSX.Element => (
  /* Add this <section> tag below the existing <section> tag */
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Articles</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
    </ul>
  </section>
);

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Sample EC | Top</title>
      </Head>
      {/* Counter */}
      <p>Welcome! Today is {today}</p>
      <Image
        src="/images/ecommerce.jpg"
        alt="Item A"
        className="itemImage"
        width={600}
        height={400}
      />

      <h2>Items</h2>
      <ul>
        <li>
          <Link href="/items/itemA">
            <a>
              <Image
                src="/images/itemA.jpg"
                alt="Item A"
                className="itemImage"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link href="/items/itemA">
            <a>Item A</a>
          </Link>
        </li>
      </ul>
      <ArticleList allPostsData={allPostsData} />
      <h2>Articles</h2>
      <ul>
        <li>
          <Link href="/articles/article1">
            <a>
              <Image
                src="/images/article1.jpg"
                alt="Article 1"
                className="articleImage"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <Link href="/articles/article1">
            <a>Article 1</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

/**
 * Return an external data fetched upon build
 * @function
 * @type
 * @default
 */
export async function getStaticProps(): GetStaticProps {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
