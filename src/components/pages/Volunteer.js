import React from "react";

import PageHeader from "../common/PageHeader.js";
import UnderContruction from "../common/UnderConstruction.js";

function Volunteer() {
    return (
        <div className="Volunteer container Container">
            <PageHeader title="Volunteer" type="page" />
            <UnderContruction />
        </div>
    );
}

export default Volunteer;