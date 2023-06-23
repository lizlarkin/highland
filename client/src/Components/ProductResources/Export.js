import React from 'react';
import EUS from '../../Pages/FAQ/End User Statement.pdf';

const Export = ({model, ECCN, htsCode, noExport}) => {
  return (
        <div className="modal fade" id="exportModal" tabIndex="-1" aria-labelledby="exportModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exportModalLabel">{model} Export &amp; Classification Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        All sales are subject to U.S. Department of Commerce Export Regulations. Highland will collect an End User Statement for all international sales to ensure that product export to the destination country is permitted. Each End User Statement requires disclosure of the Ultimate and Intermediate Consignees, and agreement to comply with export laws of the United States. Highland reserves the right to deny export for any reason. A copy of the End User Statement form can be downloaded <a href={EUS}>here</a>.
                        <ul className="list-group resources-data">
                            <li className="list-group-item list-group-item-action list-group-item-light">{ECCN?"ECCN: "+ ECCN:null}</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">CAGE Code: 1RHL3</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">{htsCode?"Harmonized Tariff Schedule (new): "+htsCode:null}</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">Harmonized Tariff Schedule (return): 9801.10.0000</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">Primary NAICS Code: 334418</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">Secondary NAICS Code: 334515</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">Country of Origin: United States</li>
                            <li className="list-group-item list-group-item-action list-group-item-light">Export Disallowed: {noExport?noExport+',':null} Russia, Iran, Lebanon, North Korea, Cuba, Libya, Sudan, Somalia, and Syria</li>
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

export default Export