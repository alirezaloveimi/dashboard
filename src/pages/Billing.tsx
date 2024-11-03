// components
import Card from "../components/Card";

// datas , icons , utils
import { billingInformations, invoicesItems } from "../data/datas";
import { icons } from "../data/icons";
import { numberWithCommas } from "../utils/funcs";

const Billing = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-5 flex-[2]">
          <div className="flex flex-col gap-5 xl:flex-row">
            <Card
              otherClasses="bg-cover-center flex-1"
              bgImage="bg-[url('/images/billing-background-card.jpg')]"
            >
              <div className="flex-center-between py-3">
                <h3 className="text-lg sm:text-xl md:text-2xl">Vision UI</h3>
                <span className="text-3xl">{icons.heatMap}</span>
              </div>
              <div className="mt-12">
                <h4 className="sm:text-lg md:text-2xl">
                  7812&nbsp;&nbsp;&nbsp;2139&nbsp;&nbsp;&nbsp;0823&nbsp;&nbsp;&nbsp;7916
                </h4>

                <div className="flex-align-center gap-x-6 mt-4">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-[10px] font-bold opacity-80">
                      VALID THRU
                    </span>
                    <span className="font-bold">05/24</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-[10px] font-bold opacity-80">
                      CVV
                    </span>
                    <span className="font-bold">09X</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card otherClasses="flex-1">
              <div
                style={{ backgroundImage: 'url("/images/download.png")' }}
                className="p-5 rounded-[18px] bg-cover-center space-y-3"
              >
                <div className="flex-center-between">
                  <h6 className="text-xs md:text-base">Credit Balance</h6>
                  <span className="text-xl cursor-pointer">
                    {icons.verticalDots}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl">$25,215</h2>
              </div>

              <div className="my-3">
                <span className="text-secondary font-bold text-[10px]">
                  NEWEST
                </span>
                <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between py-4 sm:gap-0">
                  <div className="flex-align-center gap-x-4">
                    <div className="size-12 rounded-full grid-center bg-[#22294eb3]">
                      <span className="text-green-600 text-lg">
                        {icons.building}
                      </span>
                    </div>
                    <div>
                      <h4>Bill & Taxes</h4>
                      <span className="text-secondary text-sm">
                        Today, 16:36
                      </span>
                    </div>
                  </div>
                  <span className="font-bold">-$154.50</span>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <h5 className="sm:text-lg md:text-xl">Payment Method</h5>
              <button
                type="button"
                className="self-end md:self-auto py-2 px-5 rounded-lg bg-primary font-bold text-xs transition-ease-300 hover:scale-105"
              >
                Add New Card
              </button>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <div className="border border-gray-500 p-4 flex flex-align-center gap-4 rounded-xl flex-1">
                <span className="text-2xl">{icons.card}</span>
                <span className="font-bold text-sm">7812 2139 0823 XXXX</span>
              </div>
              <div className="border border-gray-500 p-4 flex flex-align-center gap-4 rounded-xl flex-1">
                <span className="text-3xl">{icons.visa}</span>
                <span className="font-bold text-sm">7812 2139 0823 XXXX</span>
              </div>
            </div>
          </Card>
        </div>

        <Card otherClasses="flex-1">
          <div className="flex-center-between">
            <h4 className="sm:text-lg md:text-xl">Invoices</h4>
            <button
              type="button"
              className="py-2 px-5 rounded-lg bg-primary font-bold text-xs transition-ease-300 hover:scale-105"
            >
              View All
            </button>
          </div>

          <ul className="space-y-6 mt-4">
            {invoicesItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1.5">
                  <h5>{item.date}</h5>
                  <p className="text-secondary text-sm">{item.code}</p>
                </div>
                <div className="flex-align-center gap-x-4">
                  <span className="text-secondary text-sm">
                    ${numberWithCommas(item.price)}
                  </span>
                  <div className="flex-align-center gap-x-2 text-secondary">
                    <span>{icons.document}</span>
                    <span className="text-sm">PDF</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card otherClasses="mt-6">
        <h4 className="text-lg md:text-xl">Billing Information</h4>

        <ul className="mt-5 space-y-7">
          {billingInformations.map((item) => (
            <li key={item.id} className="p-6 rounded-xl bg-primaryGradient">
              <div className="flex-center-between">
                <h5 className="font-bold">{item.name}</h5>
                <div className="flex-align-center gap-x-1.5 cursor-pointer">
                  <span className="text-red-600 font-bold">{icons.delete}</span>
                  <span className="text-red-600 font-bold">Delete</span>
                </div>
              </div>
              <div className="flex flex-col mt-2.5 gap-y-1 text-secondary">
                <span className="text-xs sm:text-sm leading-6">
                  Company Name : {item.companyName}
                </span>
                <span className="text-xs sm:text-sm leading-6">
                  Email Address: {item.email}
                </span>
                <span className="text-xs sm:text-sm leading-6">
                  VAT Number : {item.VATNumber}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
};

export default Billing;
