import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function article1() {
    return (
    <Layout>
        <Head>
            <title>Article 1</title>
        </Head>
        <h1>Article 1</h1>
        <p>Item A is awesome!</p>
        <Link href="/items/itemA">See Item A</Link>
    </Layout>
        )
  }