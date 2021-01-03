import fs from "fs";
import path from "path";

/**
 * Get all content IDs from a directory
 * @function
 * @param {string} folder - Directory to find the file
 */
export default function getAllPostIds(
  folder: string
): { params: { id: string } }[] {
  const postsDirectory = path.join(process.cwd(), folder);
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName): { params: { id: string } } => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
