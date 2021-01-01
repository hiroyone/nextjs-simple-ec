import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

export default function ItemA() {
  return (
    <Layout>
      <Head>
        <title>Sample EC | Item A</title>
      </Head>
      <Image
        src="/images/itemA.jpg"
        alt="Item A"
        className="itemImage"
        width={400}
        height={400}
      />
      <h1>Item A</h1>
      <p>Item A is awesome!</p>
    </Layout>
  );
}
