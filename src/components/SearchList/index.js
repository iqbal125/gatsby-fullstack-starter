import React from 'react';
import { Link } from 'gatsby';
import styles from './searchlist.module.css';

const SearchList = ({ hit }) => {
  const excerpt = hit._snippetResult.excerpt.value;

  return (
    <div className={styles.search_layout}>
      <Link className={styles.link} to={`/${hit.path}`}>
        <div className={styles.post_text}>
          <h2>{hit.title}</h2>
          <small>
            {hit.date} by {hit.author}
          </small>
          <h4>{hit.heading}</h4>
          <p> {excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchList;
