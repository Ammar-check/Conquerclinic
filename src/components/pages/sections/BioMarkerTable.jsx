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
              <th key={i} className={`${styles.th} ${i===0? styles.thFirst : ""}`}>
                {head.image ? (
                  <div className={styles.headerCard}>
                    <Image style={{filter:"drop-shadow(10px 10px 10px  rgba(0, 0, 0, 0.25))"}} src={head.image} width={90} height={90} alt={head.title} />
                    <p className={styles.tag}>{head.subtitle}</p>
                    <h3 className={styles.headTitle} >{head.title}</h3>
                  </div>
                ) : (
                  <span className="text-2xl font-medium ">THE <br />{head.title}</span>
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
                  <Image src={row.icon} width={28} height={28} alt={row.title} />
                  <span>{row.title}</span>
                </div>
              </td>

              {/* Values */}
              {row.values.map((val, idx) => (
                <td key={idx} className={styles.td} style={{color:"#949494"}}>
                  {val ? val : "—"}
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