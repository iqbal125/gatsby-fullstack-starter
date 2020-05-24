import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectHits } from 'react-instantsearch-dom';
import SearchList from '../SearchList';
import { connectSearchBox } from 'react-instantsearch/connectors';
import styles from './search.module.css';
import { FcSearch } from 'react-icons/fc';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Results = connectSearchBox(({ currentRefinement }) => (currentRefinement ? <Hits /> : null));

const Hits = connectHits(({ hits }) => (
  <div className={styles.search_results}>
    {hits && hits.map(hit => <SearchList key={hit.id} hit={hit} />)}
  </div>
));

const SearchBox = ({ currentRefinement, refine, props }) => {
  return (
    <div className={styles.search_box}>
      <form noValidate action="" role="search">
        <input
          className={styles.search}
          type="search"
          placeholder="Search..."
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </form>
      <div className={styles.search_icon}>
        <FcSearch />
      </div>
    </div>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);

const Search = () => {
  return (
    <InstantSearch indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME} searchClient={searchClient}>
      <CustomSearchBox />
      <Results />
    </InstantSearch>
  );
};

export default Search;
