import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import CleanDate from "./cleanDate";

export default function ArticleList({
  allArticlesData,
}: {
  allArticlesData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    /* Add this <section> tag below the existing <section> tag */
    <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Articles</h2>
      <ul className={utilStyles.list}>
        {allArticlesData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/articles/${id}`}>
              <a>
                <Image
                  src={`/images/${id}.jpg`}
                  alt={title}
                  className="articleImage"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
            <br />
            <Link href={`/articles/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <CleanDate dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
