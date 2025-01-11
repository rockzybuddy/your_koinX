import React from "react";

const DetailsHeader = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className="flex justify-start gap-5 mt-5 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`w-full text-center cursor-pointer pb-2 ${
            activeTab === tab
              ? "text-[#b79999] border-b-2 border-[#b79999] font-semibold"
              : "text-white"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default DetailsHeader;
