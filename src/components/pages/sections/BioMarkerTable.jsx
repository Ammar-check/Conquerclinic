"use client";

import React from "react";
import Image from "next/image";
import styles from "./BioMarkerTable.module.css";

const BiomarkerTable = ({ data }) => {
  const { headers, rows } = data.biomarkerTable;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>

        {/* HEADER */}
        <thead>
          <tr >
            {headers.map((head, i) => (
              <th key={i} className={styles.th}>
                {head.image ? (
                  <div className={styles.headerCard}>
                    <Image src={head.image} width={60} height={60} alt={head.title} />
                    <p className={styles.tag}>{head.subtitle}</p>
                    <h3 >{head.title}</h3>
                  </div>
                ) : (
                  <span>{head.title}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={styles.tr}>

              {/* Biomarker Column */}
              <td className={styles.firstCol}>
                <div className={styles.bioCell}>
                  <Image src={row.icon} width={20} height={20} alt={row.title} />
                  <span>{row.title}</span>
                </div>
              </td>

              {/* Values */}
              {row.values.map((val, idx) => (
                <td key={idx} className={styles.td}>
                  {val ? "✔" : "—"}
                </td>
              ))}

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default BiomarkerTable;