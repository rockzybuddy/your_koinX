import useFetchCoinData from "../hooks/useFetchCoinData";
import TradingViewWidget from "./TradingViewWidget";

const CoinHero = () => {
  const { data, loading, error } = useFetchCoinData();
  return (
    <div className="md:p-4 text-white md:bg-[#16052cfc] rounded">
        <div className="flex gap-2 items-center">
            <img className="h-10 w-10" src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=040" alt="" />
            <h1 className="text-2xl font-bold">Dogecoin</h1>
            <p className="text-gray-600">(Doge)</p>
            <div className="bg-gray-600 p-1 rounded mx-5">
                Rank #7
            </div>
        </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="bg-[#16052cfc] pb-10 rounded p-4 my-5">
      {data && (
        <div className="mb-4">
            <div className="flex gap-5 items-center">
                <p className="text-2xl font-bold">
                  ${data.dogecoin.usd.toLocaleString("en-US")}
                </p>
                <p className={`p-1 rounded-md ${
                    data.dogecoin.usd_24h_change > 0
                    ? 'bg-green-50 text-green-600'
                    : 'bg-red-50 text-red-600'
                }`}>
                    {data.dogecoin.usd_24h_change.toFixed(2)}%
                </p>
                <p className="text-gray-500">(24H)</p>
            </div>
          <p className="text-gray-700">
            ₹{data.dogecoin.inr.toLocaleString("en-IN")}
            </p>
        </div>
      )}
      <hr />
      <div className="md:h-[60vh] h-[30vh] mt-5">
      Dogecoin Price Chart (USD).
        <TradingViewWidget />
      </div>
      </div>
    </div>
  );
};

export default CoinHero;
