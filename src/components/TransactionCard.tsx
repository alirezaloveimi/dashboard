import React from "react";

import { numberWithCommas } from "../utils/funcs";

type TransactionCardProps = {
  title: string;
  price: number;
  icon: React.ReactNode;
};

const TransactionCard = ({ icon, price, title }: TransactionCardProps) => {
  return (
    <div className="flex-center-between bg-primaryGradient rounded-xl p-4">
      <div className="space-y-1">
        <span className="text-secondary text-xs">{title}</span>
        <h3 className="text-lg sm:text-xl gap-x-2">
          ${numberWithCommas(price)}
        </h3>
      </div>
      <div className="size-12 grid-center bg-primary text-white rounded-xl text-lg">
        {icon}
      </div>
    </div>
  );
};

export default TransactionCard;
