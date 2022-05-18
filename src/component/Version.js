import React, {useState} from "react";
import {Button, Collapse} from "react-bootstrap";

function Version() {
  const [open, setOpen] = useState(false);
  return(
    <div>
      <Button onClick={() => setOpen(!open)} aria-controls="collapse-text" aria-expanded={open}>Versi Website</Button>
      <Collapse in={open}>
        <div id="collapse-text">Akses Sport V1.0</div>
      </Collapse>
    </div>
  )
}

export default Version;
