import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

let today: Date = new Date();
const dd: string = String(today.getDate()).padStart(2, "0");
const mm: string = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy: string = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Sample EC Top</title>
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
            <Image
              src="/images/itemA.jpg"
              alt="Item A"
              className="itemImage"
              width={100}
              height={100}
            />
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
            <Image
              src="/images/article1.jpg"
              alt="Article 1"
              className="articleImage"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/articles/article1">
            <a>Article 1</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
