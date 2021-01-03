import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  articleData,
  itemData,
  articleMetaData,
  itemMetaData,
} from "../types/interfaces";

/**
 * Get content meta data by a file name from a directory
 * @function
 * @param {string} fileName - File Name
 * @param {string} postsDirectory - Directory to find the file
 */
function getPostsMetaData(
  fileName: string,
  postsDirectory: string
): articleMetaData | itemMetaData {
  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.md$/, "");

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // console.log(matterResult);
  // Combine the data with the id
  return {
    id,
    ...(matterResult.data as { date: string; title: string }),
  };
}

/**
 * Get all files in sorted order in a given folder
 * @function
 * @param {string} folder - Folder from which to find and get all stored files
 */
export default function getSortedPostsData(
  folder: string
): articleMetaData[] | itemMetaData[] {
  const postsDirectory = path.join(process.cwd(), folder);

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) =>
    getPostsMetaData(fileName, postsDirectory)
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
