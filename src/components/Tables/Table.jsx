import React, { useState } from "react";

import useTable from "../Hooks/useTable";
import styles from "./styles/Table.module.css";
import TableFooter from "./TableFooter/TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div className="TableBlock">
      <table className="dataTable">
        <thead>
          <tr>
            <th className={styles.tableHeader}>País</th>
            <th className={styles.tableHeader}>Capital</th>
            <th className={styles.tableHeader}>Idioma</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;