import React from "react";
import Version from "./Version.js";
import {Popover, OverlayTrigger, Button} from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Informasi Website</Popover.Header>
    <Popover.Body>
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
    </Popover.Body>
  </Popover>
);

const Pop = () => (
  <div style={{display: "flex"}}>
    <div>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="primary">Informasi</Button>
      </OverlayTrigger>
    </div>
    <div style={{marginLeft: "5px"}}>
      <Version/>
    </div>
  </div>
);


export default Pop;
