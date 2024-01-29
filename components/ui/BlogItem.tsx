import React from "react";
import Title from "./title";
import { Interweave } from "interweave";

interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail?: string; // Make thumbnail optional
  description: string;
  enclosure: string;
  categories: string[];
}

interface BlogItemProps {
  item: Item;
}

const BlogItem = ({ item: item }: BlogItemProps) => {
  let html = item.description;
  html = html
    .replaceAll(
      "<h3>",
      "<div style='font-size:22px; font-weight: bold; margin-top: 40px; margin-bottom: 30px'>"
    )
    .replaceAll("</h3>", "</div>")
    .replaceAll(
      "<h4>",
      "<div style='font-size:20px; font-weight: bold; margin-top: 30px; margin-bottom: 20px'>"
    )
    .replaceAll("</h4>", "</div>")
    .replaceAll("<p>", "<p style='font-size:19px'>")
    .replaceAll(
      "<ul>",
      "<div class='list-container' style='list-style-type: none; padding: 0;'>"
    )
    .replaceAll("</ul>", "</div>")
    .replaceAll(
      "<li>",
      "<div class='list-item' style='margin-bottom: 5px; font-size:19px';>"
    )
    .replaceAll("</li>", "</div>")
    .replaceAll(
      "<ol>",
      "<div class='ordered-list-container' style='list-style-type: decimal; padding: 0;'>"
    )
    .replaceAll("</ol>", "</div>")
    .replaceAll("<figure>", "<figure style='margin:20px'>");

  return (
    <div>
      <Title
        articleTitle={item.title}
        author={item.author}
        publishedDate="10 Jan"
      />
      <div
        className="mt-6"
        // dangerouslySetInnerHTML={{ __html: item.description }}
      >
        <Interweave content={html} />
      </div>
    </div>
  );
};

export default BlogItem;
