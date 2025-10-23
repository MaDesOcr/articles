import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/InteractApi";
import type { Article } from "../model/Articles";

function ArticleDetail(){

    const {id} = useParams();
    const [article, setArticle] = useState<Article|null>(null);

    if(id) {
        useEffect(() => {
            fetchProductById(parseInt(id)).then(data => {
            setArticle(data);
            });
        }, []);
    }
    if(article){
        return(
            <div>
               <div className="article-card">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="article-image"
      />

      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-brand">{article.brand}</p>
        <p className="article-description">{article.description}</p>
        <div className="article-info">
          <span className="article-price">${article.price}</span>
          <span className="article-rating">⭐ {article.rating}</span>
        </div>
        {article.discountPercentage > 0 && (
          <span className="article-discount">-{article.discountPercentage}%</span>
        )}
        <p className="article-stock">
          {article.stock > 0 ? `En stock: ${article.stock}` : 'Rupture de stock'}
        </p>
      </div>
    </div>
            </div>
        )
    }
}

export default ArticleDetail;