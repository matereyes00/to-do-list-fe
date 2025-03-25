import React from "react";
import { Link } from "react-router";

const view_lists = () => {
    return (
        <>
            <h1 className="text-5xl">View All Lists</h1>
            <div className="grid grid-flow-col grid-rows-3 gap-3 w-full p-3">
                <button type='submit' className="bg-purple-300 text-slate-950 ">Add new List</button>
                <div className="bg-gray-400 p-4">LIST</div>
            </div>
        </>
    )
}

export default view_lists;