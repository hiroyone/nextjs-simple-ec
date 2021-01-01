import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

/**
 * Return a date in a ISO date format
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

export default function Home() {
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
