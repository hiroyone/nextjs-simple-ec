import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { articleData, itemData } from "../types/interfaces";

/**
 * Get content data by a file name from a directory
 * @function
 * @param {string} id - File id
 * @param {string} folder - Directory to find the file
 */
export default async function getPostData(
  id: string,
  folder: string
): Promise<itemData | articleData> {
  const postsDirectory = path.join(process.cwd(), folder);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Check the content of HTML
  // console.log(contentHtml);
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
