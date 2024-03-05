import React from "react";

const StatementBar = ({ statement, percentage }) => {
  return (
    <div className="p-2">
      <div className="flex items-start mb-2 space-x-2">
        <div className="text-4xl font-helvetica-500">{percentage}%</div>
        <div className="">{statement}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className="transition-all ease-out duration-1000 bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const StatementList = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 border-[1.5px] border-gray-300">
      <StatementBar statement="presenta menos arrugas" percentage={76} />
      <StatementBar statement="obtuvo una reducción clínicamente probada de las líneas de expresión" percentage={69} />
      <StatementBar statement="obtuvo un aumento clínicamente probado en la elasticidad y firmeza de su piel" percentage={90} />
    </div>
  );
};

export default StatementList;