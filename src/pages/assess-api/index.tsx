import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Assess.json"

const AssessApi = () => {
  return (
    <>
      <head>
        <title>
          Assess API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default AssessApi