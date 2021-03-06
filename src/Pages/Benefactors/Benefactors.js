import React from "react";
import "./Benefactors.css";
import RenderBenefactorsTable from "./BenefactorsTable";
import data from "./data";

const Benefactors = () => {

  // connect to back end and fetch all beneciries data for a user
  const fetchAllbenefactors = () => {
    if (data.length === 0) {
      return null;
    } else {
      return data;
    }
  };
  
  return (
    <div className="Benefactors">
      <div className="grid-container">
        <div className="pageTitle col-1">
          <h3>Benefactors</h3>
          <div>Personal</div>
        </div>
        <div className="addBenefactors-btn col-2">
          <button>Send Request</button>
        </div>
        <div className="totalBenefactors col-3">
          <div> Total Benefactors</div>
          <div>17</div>
        </div>
        <div className="awaitingRequest col-4">
          <div> Pending Request </div>
          <div>3</div>
        </div>
        <div className="earnings col-5">
          <div> Expected Earning </div>
          <div>#42,000</div>
        </div>
        <RenderBenefactorsTable benefactors={fetchAllbenefactors()} />
      </div>
    </div>
  );
};

export default Benefactors;
