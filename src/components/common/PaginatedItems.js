import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { getProjectData } from "../../utils/get-project-data";

// Example items, to simulate fetching from another resources.
function Items({ Component, currentItems }) {
    return (
        <>
            {
                Object.keys(currentItems).map((name, key) => {
                    return <Component key={key} projectName={name} projectData={getProjectData(name)} />
                })
            }
        </>
    )
}

function PaginatedItems({ Component, items, itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    
    const itemsLength = Object.keys(items).length;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = Object.fromEntries(Object.entries(items).slice(itemOffset, endOffset));
    const pageCount = Math.ceil(itemsLength / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % itemsLength;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items Component={Component} currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;