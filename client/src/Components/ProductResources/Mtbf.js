import React from 'react';
import "./assets/modalStyle.css"

const Mtbf = ({model, MTBF}) => {
  return (
    <div className="modal fade" id="mtbfModal" tabIndex="-1" aria-labelledby="mtbfModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="mtbfModalLabel">{model} Reliability</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    MTBF is calculated using Bellcore TR-332 Issue 6, Method 1, Environment 1, Case 1. It tends to be a very conservative estimate of MTBF. In practice, we generally see a much lower failure rate. 
                    <ul className="list-group resources-data">
                        <li className="list-group-item list-group-item-action list-group-item-light">{MTBF[0]?"Mean Time Between Failures (MTBF): " + MTBF[0] +" hours":null}</li>
                        <li className="list-group-item list-group-item-action list-group-item-light">{MTBF[1]?"Failures/Billion Hours (FITs): " + MTBF[1]:null}</li>
                    </ul> 
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mtbf