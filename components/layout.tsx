import styles from "./layout.module.css";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

/**
 * Provide a <head> tag of the layout
 * @constant
 * @type {function}
 * @default
 */
const LayoutHead = (): JSX.Element => (
  // Provide common head properties
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Simple EC Website" key="title" />
    {/* Set up later */}
    {/* <meta
      property="og:image"
      content={`https://og-image.now.sh/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    /> */}
    {/* <meta name="og:title" content={siteTitle} /> */}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

const siteTitle: string = "Sample EC Website";

/**
 * Provide a header part of the layout
 * @constant
 * @type {function}
 * @default
 */
const LayoutHeader = ({ home }: { boolean }): JSX.Element => (
  <header className={styles.header}>
    <Link href="/">
      <Image
        src="/images/logoEC.png"
        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        width={50}
        height={50}
        alt={siteTitle}
      />
    </Link>
    <Link href="/">
      <h1 className={utilStyles.heading2Xl}>
        <a className={utilStyles.colorInherit}>{siteTitle}</a>
      </h1>
    </Link>
  </header>
);

const BackToHome = ({ home }: { boolean }): JSX.Element => (
  <>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a> Back to home</a>
        </Link>
      </div>
    )}
  </>
);

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <LayoutHead />
      <LayoutHeader home={home} />
      <main>{children}</main>
      <BackToHome home={home} />
    </div>
  );
}
