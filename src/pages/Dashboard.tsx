// components
import Card from "../components/Card";
import Circle from "../components/Circle";
import GridWrapper from "../components/GridWrapper";
import Activities from "../components/Activities";
import TransactionCard from "../components/TransactionCard";
import Table from "../components/Table";
import ProgressBar from "../components/ProgressBar";

// datas , icons , utiles
import {
  salesChart,
  transactions,
  usersChart,
  websiteActivities,
  projectsTableItems,
  ordersOverview,
} from "../data/datas";
import { icons } from "../data/icons";
import { numberWithCommas } from "../utils/funcs";

// apexcharts
import Chart from "react-apexcharts";

const Dashboard = () => {
  return (
    <main>
      <GridWrapper
        gap="gap-4"
        otherClasses="mt-3"
        responsive="grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
      >
        {transactions.map((item) => (
          <TransactionCard key={item.id} {...item} />
        ))}
      </GridWrapper>

      <GridWrapper
        gap="gap-4"
        otherClasses="my-4"
        responsive="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        <Card
          bgImage="bg-[url('/images/cardimgfree.jpg')]"
          otherClasses="flex flex-col justify-between bg-cover-center lg:col-span-2 xl:col-span-1"
          height={340}
        >
          <div className="space-y-2">
            <span className="text-secondary text-xs sm:text-sm">
              Welcome back
            </span>
            <h4 className="sm:text-lg md:text-xl lg:text-2xl">Mark Johnson</h4>
            <p className="text-secondary text-sm sm:text-base max-w-32">
              Glad to see you again! Ask me anything.
            </p>
          </div>

          <div className="flex-align-center cursor-pointer gap-x-2 text-sm transition-ease-300 hover:gap-x-3">
            <span>Top To Record</span>
            <span>{icons.arrowRight}</span>
          </div>
        </Card>

        <Card otherClasses="xl:col-span-1">
          <h4 className="sm:text-lg md:text-xl">Satisfaction Rate</h4>
          <span className="text-secondary text-xs sm:text-sm mt-3">
            From All Projects
          </span>

          <Circle type={1}>
            <span className="size-14 grid-center bg-primary text-white rounded-full text-3xl">
              {icons.emojiEmotions}
            </span>
          </Circle>
        </Card>

        <Card otherClasses="xl:col-span-1">
          <div className="flex-center-between">
            <h4 className="sm:text-lg md:text-xl">Referral Tracking</h4>
            <span className="size-9 grid-center rounded-xl cursor-pointer text-primary bg-[#22234b] text-xl">
              {icons.threeDots}
            </span>
          </div>

          <Circle type={2}>
            <span className="text-secondary font-bold text-sm">Safety</span>
            <h2 className="text-5xl font-bold my-2">9.3</h2>
            <span className="text-secondary font-bold text-sm">
              Total Score
            </span>
          </Circle>
        </Card>
      </GridWrapper>

      <GridWrapper
        gap="gap-4"
        otherClasses="my-4"
        responsive="grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
      >
        <Card>
          <h4 className="sm:text-lg md:text-xl ml-4">Sales Overview</h4>

          <p className="text-secondary text-xs sm:text-sm mt-2 ml-4">
            <span className="text-green-400">+5% More</span> in 2021
          </p>

          <Chart
            type="area"
            height={310}
            width={"100%"}
            series={salesChart.series}
            options={salesChart.options}
          />
        </Card>

        <Card>
          <Chart
            options={usersChart.options}
            series={usersChart.series}
            type="bar"
            height={220}
          />

          <div className="mt-3 mb-8">
            <h4 className="sm:text-lg md:text-xl">Active Users</h4>
            <p className="text-secondary mt-2 text-xs sm:text-sm">
              <span className="text-green-400">(+23)</span> Then Last Week
            </p>
          </div>

          <GridWrapper
            responsive="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            gap="gap-y-6 sm:gap-y-8 sm:gap-x-12"
            otherClasses="my-5"
          >
            {websiteActivities.map((item) => (
              <Activities key={item.id} {...item} />
            ))}
          </GridWrapper>
        </Card>
      </GridWrapper>

      <GridWrapper gap="gap-6" responsive="grid-cols-1 lg:grid-cols-3">
        <Card otherClasses="lg:col-span-2">
          <h4 className="sm:text-lg md:text-xl mb-1.5">Projects</h4>
          <p className="text-secondary text-xs mb-5">
            <span className="font-bold">30 Done</span> This Month
          </p>

          <Table headerTitles={["COMPANIES", "BUDGET", "COMPLETION"]}>
            {projectsTableItems.map((item) => (
              <tr key={item.id} className="border-b border-secondary">
                <td className="flex-align-center gap-x-3 p-4 lg:p-3">
                  <span className="text-lg" style={{ color: item.iconColor }}>
                    {item.icon}
                  </span>
                  <span>{item.companies}</span>
                </td>
                <td className="p-4 lg:p-3">
                  {item.budget > 0
                    ? "$" + numberWithCommas(item.budget)
                    : "Not Set"}
                </td>
                <td className="p-4 lg:p-3">
                  <ProgressBar width={item.completion} />
                </td>
              </tr>
            ))}
          </Table>
        </Card>

        <Card>
          <h4 className="sm:text-lg md:text-xl mb-1.5">Orders</h4>
          <p className="text-secondary text-xs mb-5">
            <span className="font-bold">30 Done</span> This Month
          </p>

          <ul className="space-y-6">
            {ordersOverview.map((item) => (
              <li key={item.id} className="flex-align-center gap-x-5">
                <span style={{ color: item.iconColor }} className="text-2xl">
                  {item.icon}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs text-secondary">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </GridWrapper>
    </main>
  );
};

export default Dashboard;
