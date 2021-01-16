import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import CleanDate from "./cleanDate";
import { itemMetaData } from "../types/interfaces";

export default function ItemList({
  allItemsData,
}: {
  allItemsData: itemMetaData[];
}): JSX.Element {
  return (
    /* Add this <section> tag below the existing <section> tag */
    <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Items</h2>
      <ul className={utilStyles.list}>
        {allItemsData.map((item) => (
          <li className={utilStyles.listItem} key={item.id}>
            <Link href={`/items/${item.id}`}>
              <a>
                <img
                  src={`/images/${item.id}.jpg`}
                  alt={item.name}
                  className="itemImage"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
            <br />
            <Link href={`/items/${item.id}`}>
              <a>{item.name}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <CleanDate dateString={item.date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
