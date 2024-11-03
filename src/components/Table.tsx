import React from "react";


type TableProps = {
  headerTitles: string[];
  children : React.ReactNode
};

const Table = ({ headerTitles, children }: TableProps) => {
  return (
    <div className="overflow-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-secondary">
            {headerTitles.map((item, index) => (
              <th
                key={index}
                className="text-left p-4 lg:p-3 text-secondary text-xs"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
