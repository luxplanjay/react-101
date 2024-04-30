import { useState } from "react";
import Progress from "../Progress/Progress";

export default function Reader({ articles }) {
  const [articleIdx, setArticleIdx] = useState(0);

  const handlePrev = () => {
    setArticleIdx(articleIdx - 1);
  };

  const handleNext = () => {
    setArticleIdx(articleIdx + 1);
  };

  const currentArticle = articles[articleIdx];
  const isFirst = articleIdx === 0;
  const isLast = articleIdx === articles.length - 1;

  return (
    <div>
      <div>
        {/* Controls onPrev onNext isFirst isLast */}
        <div>
          <button onClick={handlePrev} disabled={isFirst}>
            Prev
          </button>
          <button onClick={handleNext} disabled={isLast}>
            Next
          </button>
        </div>

        <Progress current={articleIdx + 1} total={articles.length} />
      </div>

      {/* ArticleView article */}
      <article>
        <h2>{currentArticle.topic}</h2>
        <p>{currentArticle.text}</p>
      </article>
    </div>
  );
}
