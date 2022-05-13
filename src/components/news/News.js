import classes from './news.module.css';

export const News = ({ news }) => {

  if (!news || news.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={classes.newsList}>
        {news.map(({ objectID, url, title, points, num_comments, created_at, author }) => (
          <li key={objectID} className={classes.news}>
            <div className={classes.description}>
              <a href={url} className={classes.newsTitle}>{title}</a>
              <span className={classes.text}>{`${points || 0} points`}</span>
              <span>{`${num_comments || 0} comments`}</span>
              <span>{new Date(created_at).toLocaleDateString()}</span>
              <span>{author || 'no author'}</span>
            </div>

          </li>
        ))}
      </ul>

    </div>
  )
}