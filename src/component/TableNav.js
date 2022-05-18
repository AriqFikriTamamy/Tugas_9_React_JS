import React from "react";
import Tables from "./Tables.js";
import Page from "./Page.js";
import Over from "./Over.js";

import {Tabs, Tab} from "react-bootstrap";

function TableNav () {
  return(
    <div>
      <h4>Rumor Transfer Pemain</h4>
      <br/>
      <Tabs defaultActiveKey="transfer" id="navigasi-tabel" className="mb-3">
        <Tab eventKey="transfer" title="Semua Transfer">
          <Tables/>
        </Tab>
        <Tab eventKey="inggris" title="Liga Primer Inggris"></Tab>
        <Tab eventKey="serie a" title="Serie A"></Tab>
        <Tab eventKey="primera" title="Divisi Primera"></Tab>
        <Tab eventKey="bundes" title="Bundes Liga"></Tab>
        <Tab eventKey="liga 1" title="Liga 1 Indonesia"></Tab>
      </Tabs>
      <Page/>
      <Over/>
    </div>
  )
}

export default TableNav;
