import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function itemA() {
    return (
    <Layout>
      <Head>
        <title>Item A</title>
      </Head>
        <h1>Item A</h1>
        <p>Item A is awesome!</p>
        <Link href="/">Back to top</Link>
    </Layout>
        )
  }