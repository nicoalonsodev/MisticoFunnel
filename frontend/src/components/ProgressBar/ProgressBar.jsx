import React from "react";

const StatementBar = ({ statement, percentage }) => {
  return (
    <div className="p-2">
      <div className="flex items-start mb-2 space-x-2">
        <div className="text-4xl font-helvetica-500">{percentage}%</div>
        <div className="">{statement}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className="transition-all ease-out duration-1000 bg-gradient-to-r from-yellow-700 to-yellow-600 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const StatementList = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 border-[1.5px] border-gray-300">
      <StatementBar statement="Mejor precio que todas las marcas de shopping
" percentage={90} />
      <StatementBar statement="Mejor calidad que todas las marcas de shopping
" percentage={96} />
      <StatementBar statement="Mejor Calze que todas las marcas de shopping" percentage={89} />
    </div>
  );
};

export default StatementList;