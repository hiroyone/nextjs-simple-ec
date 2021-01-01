import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function Article1() {
  return (
    <Layout home>
      <Head>
        <title>Sample EC | Article 1</title>
      </Head>
      <Image
        src="/images/article1.jpg"
        alt="Article 1"
        className="articleImage"
        width={400}
        height={400}
      />
      <h1>Article 1</h1>
      <p>This article introduces how Item A is awesome!</p>
      <Link href="/items/itemA">See Item A</Link>
      <br />
    </Layout>
  );
}
