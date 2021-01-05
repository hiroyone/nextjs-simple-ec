import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import CleanDate from "./cleanDate";
import { articleMetaData } from "../types/interfaces";

export default function ArticleList({
  allArticlesData,
}: {
  allArticlesData: articleMetaData[];
}): JSX.Element {
  return (
    /* Add this <section> tag below the existing <section> tag */
    <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Articles</h2>
      <ul className={utilStyles.list}>
        {allArticlesData.map((article) => (
          <li className={utilStyles.listItem} key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a>
                <Image
                  src={`/images/${article.id}.jpg`}
                  alt={article.title}
                  className="articleImage"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
            <br />
            <Link href={`/articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <CleanDate dateString={article.date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
