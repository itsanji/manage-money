import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isNumeric } from "../utils/helper";

const MonthDetail: React.FC = () => {
    const [urlParam] = useSearchParams();
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        // Check if query passed;
        let year = urlParam.get("year");
        let month = urlParam.get("month");

        // Check if value is number
        if (!isNumeric(year) || !isNumeric(month)) {
            // show error and show this month instead
            month = (new Date().getMonth() + 1).toString();
            year = new Date().getFullYear().toString();
        }

        if (!year || !month) {
            // set year and month to current
            month = (new Date().getMonth() + 1).toString();
            year = new Date().getFullYear().toString();
        }

        setMonth(month);
        setYear(year);
    }, []);

    return (
        <>
            <h1>Month Detail</h1>
            <h3>
                Showing Data in {month}th Month of {year}
            </h3>
        </>
    );
};

export default MonthDetail;
