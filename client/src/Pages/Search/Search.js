import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';

const Search = () => {
  return (
    <div>  
        <div>
            <GenJumbo />
        </div>

        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8"></div>
                <div className="gcse-searchresults-only"></div>
            <div className="col-md-2"></div>
        </div>

    </div>
  )
}

export default Search