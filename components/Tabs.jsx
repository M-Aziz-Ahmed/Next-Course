'use client'
import React, { useState } from "react";
const Tabs = ({ }) => {
    const tabs = [
        { name: "Tab 1", key: "tab1" },
        { name: "Tab 2", key: "tab2" },
        { name: "Tab 3", key: "tab3" },
        { name: "Tab 4", key: "tab4" },
    ]
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <>
            <div className="flex my-10">

                <div className="flex flex-col px-4 border-r mx-3 ">
                    {tabs.map((tab) => (
                        <button key={tab.key} className={`px-4 py-2 m-2 font-bold ${activeTab === tab.key ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`} onClick={() => setActiveTab(tab.key)}>{tab.name}</button>
                    ))}
                </div>
                {activeTab === "tab1" && (
                    <>Tab 1 Content</>
                )}
                {activeTab === "tab2" && (
                    <>Tab 2 Content</>
                )}
                {activeTab === "tab3" && (
                    <>Tab 3 Content</>
                )}
                {activeTab === "tab4" && (
                    <>Tab 4 Content</>
                )}
            </div>
        </>
    );
}

export default Tabs