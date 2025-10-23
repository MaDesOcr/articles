import { useEffect, useState } from 'react';
import type { Article } from '../model/Articles';
import { fetchProducts } from '../data/InteractApi';
import { ArticleCard } from './ArticleCard';

export const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchProducts().then(data => {
      setArticles(data.products);
    });
  }, []);

  return (
    <div className="article-list">
      <h1>Nos Produits</h1>
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
