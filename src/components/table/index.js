import React, { useState } from "react";
import { CDataTable, CPagination } from "@coreui/react";

import { CIcon } from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import "./index.scss";

const Table = (props) => {
  const [page, setPage] = useState(1);

  const pageChange = (newPage) => {
      setPage(newPage)
  };

  return (
    <div className={"container-table"}>
      <CDataTable
        items={props.usersData}
        fields={props.fields}
        itemsPerPage={7}
        activePage={page}
        scopedSlots={{
          actions: (item, index) => {
            return (
              <>
                <td
                  style={{
                    display: "grid",
                    gridAutoFlow: "column",
                    gridGap: 8,
                    justifyContent:'start',
                    alignItems: "center",
                    height: 38,
                  }}
                >
                  <CIcon
                    size={"sm"}
                    style={{ cursor: "pointer", width: 20, height:20 }}
                    content={freeSet.cilPencil}
                    onClick={() => props.actionEdit(index)}
                  />
                  <CIcon
                    size={"sm"}
                    style={{ cursor: "pointer", width: 20, height:20 }}
                    content={freeSet.cilMinus}
                    onClick={() => props.actionUpdate(index)}
                  />
                </td>
              </>
            );
          },
        }}
      />
      <CPagination
        activePage={page}
        doubleArrows={false}
        nextButton={<p>Next</p>}
        previousButton={<p>Previous</p>}
        pages={Math.ceil(props.usersData?.length / 7) || 0}
        onActivePageChange={pageChange}
      />
    </div>
  );
};

export default Table;
