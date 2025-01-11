const FundamentalsComponent = ({ fundamentalsData, tabs, sectionRefs }) => {
    return (
      <div key={tabs.Fundamentals} ref={sectionRefs.Fundamentals} className="p-6 bg-[#16052cfc] text-white rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">Fundamentals</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(fundamentalsData).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b">
              <p className="text-[#b588b5]">{key}</p>
              <p className="text-lg">{value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FundamentalsComponent;
  