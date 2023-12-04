import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Blogs from "./Blogs";
import useFetch from '../../hooks/useFetch'

export default function BlogPaginator() {
  const { data: blogs, error } = useFetch('press')

  if (!blogs) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs</p>;

  return <Paginator d={blogs.data} />;
}

const Paginator = ({ d }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 9;
  const data = d;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Blogs d={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        // renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageClassName={"pagination__page"}
        activeClassName={"pagination__pageActive"}
        previousClassName={"pagination__pagePrev"}
        nextClassName={"pagination__pageNext"}
      />
    </>
  );
};
