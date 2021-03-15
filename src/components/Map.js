import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import {Button, Modal} from 'react-bootstrap';


function Map() {

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "60vh",
    zoom: 10
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPopup, togglePopup] = useState(false);

  return (
    <>
    <Button variant="dark" onClick={handleShow} className="btn-sm mr-2" style={{width: "250px"}}>
        Location
    </Button>
    <Modal 
      show={show} 
      onHide={handleClose} 
      dialogClassName="modal-90w"
      style={{width: "90%"}}
      centered>

      <Modal.Body>

        <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken="pk.eyJ1IjoiYWNoZmFqYXItMjQiLCJhIjoiY2ttOTdmYmhhMWZndzJvb2o5b3h3Ym5tcyJ9.nrHsfh693IosdLB9294YQQ"
        onViewportChange={(viewport) => setViewport(viewport)}
        > 
          {showPopup && <Popup
            latitude={37.78}
            longitude={-122.41}
            closeButton={true}
            closeOnClick={false}
            onClose={() => togglePopup(false)}
            anchor="top" >
            <div>You are here</div>
          </Popup>}
          
        </ReactMapGL>

      </Modal.Body>

    </Modal>
    </>
  );
}

export default Map