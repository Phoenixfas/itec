import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import EventCard from "./EventCard";
// import useFetch from "../../hooks/useFetch";
// import exhibitors from '../../../../data/exhibitors'
import EList from "./EList";
import useFetch from "../../../../hooks/useFetch";

export default function EPaginator() {
  const { data: exhibitors, loading, error } = useFetch("exhibitors");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return <Paginator d={exhibitors?.data.filter(e => e.approved)} />;
}

const Paginator = ({ d }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;
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
      <EList d={currentItems} />

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
