import { useState, useEffect } from "react";
import React from "react";
import BlogItem from "./BlogItem";
import Title from "./title";

interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail?: string;
  description: string;
  enclosure: string;
  categories: string[];
}

interface Res {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Item[];
}

const Blogs = () => {
  const rssApiUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fopsnetic";
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(rssApiUrl);
        const result: Res = await response.json();

        if (result.status === "ok") {
          setItems(result.items);
        } else {
          setError("Error fetching blogs. Please try again later.");
        }
      } catch (error) {
        setError(
          "Error fetching blogs. Please check your internet connection."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [rssApiUrl]);
  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <div></div>
      <div className="mx-80 mt-10">
        <ul>
          {items.map((item) => (
            <BlogItem key={item.link} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
