import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import styles from './tagslist.module.css';

const TagsList = ({ tags }) => {
  return (
    <div>
      tags:
      {tags.map(tag => {
        return (
          <Link
            key={tag}
            className={styles.link}
            to={`/tags/${kebabCase(tag)}/`}
          >
            {tag}
          </Link>
        );
      })}
    </div>
  );
};

export default TagsList;
