import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="spinner-loading" data-test-id="loader">
      <h2 className="loadingTittle">loading</h2>
    </div>
  );
}

export default Loading;
