import { useState } from "react";
import ReactPaginate from "react-paginate";
import Items from "./Items";
import { Country } from "../../App";
import styles from "./pagination.module.scss";

interface PaginationProps {
  countries: Country[];
}

const Pagination: React.FC<PaginationProps> = ({ countries }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentCountries = countries
    .slice(itemOffset, endOffset)
    .map((item) => item);
  const pageCount = Math.ceil(countries.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentCountries={currentCountries} />
      <div className={styles.center}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          activeClassName={styles.itemActive}
          containerClassName={styles.pagination}
        />
      </div>
    </>
  );
};

export default Pagination;
