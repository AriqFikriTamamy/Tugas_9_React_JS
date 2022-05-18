import React from "react";
import Data from "./Data.js";
import {Table, ProgressBar} from "react-bootstrap";

function Tables () {
  return(
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Pemain</th>
            <th>Tim</th>
            <th>Transfer</th>
            <th>Proses Transfer</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => {
            return(
              <tr>
                <td keys={index}>{index+1}</td>
                <td>{item.namaPemain}</td>
                <td>{item.tim}</td>
                <td>{item.transfer}</td>
                <td>
                  <ProgressBar animated now={item.progress} label={item.progress + "%"}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Tables;
