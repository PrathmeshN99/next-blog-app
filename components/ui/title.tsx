import React from "react";

interface Props {
  articleTitle: string;
  author: string;
  publishedDate: string;
}

const Title = ({
  articleTitle: articleTitle,
  author: author,
  publishedDate: publishedDate,
}: Props) => {
  return (
    <div>
      <div className="text-5xl text-center leading-tight tracking-tight">
        {articleTitle}
      </div>
      <div className="mt-12 flex">
        <img src="logo.png" width={30} />
        <span className="ml-4">{author}</span>
        <span className="ml-4">{publishedDate}</span>
      </div>
    </div>
  );
};

export default Title;
