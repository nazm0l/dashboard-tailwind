import { CgNotes } from "react-icons/cg";
import StatisticsItem from "./StatisticsItem";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";

const Statistics = () => {
  return (
    <div className=" gap-5 md:h-24 shadow-md rounded-lg bg-white flex justify-around flex-wrap my-10">
      <StatisticsItem
        icon={<CgNotes className="w-8 h-8" />}
        title="Total"
        invoice={20}
        money={1205.75}
        progressValue={100}
        colorCode="#35BBD9"
      />
      <StatisticsItem
        icon={<AiFillCheckCircle className="w-8 h-8 text-[#3FB47F]" />}
        title="Paid"
        invoice={5}
        money={294.01}
        progressValue={25}
        colorCode="#3FB47F"
      />
      <StatisticsItem
        icon={<BiTime className="w-8 h-8 text-[#FBAB27]" />}
        title="Unpaid"
        invoice={3}
        money={222.47}
        progressValue={15}
        colorCode="#FBAB27"
      />
      <StatisticsItem
        icon={<AiFillBell className="w-8 h-8 text-rose-600" />}
        title="Overdue"
        invoice={8}
        money={446.75}
        progressValue={40}
        colorCode="#F87171"
      />
      <StatisticsItem
        icon={<AiFillFile className="w-8 h-8 text-slate-500" />}
        title="Draft"
        invoice={4}
        money={242.75}
        progressValue={20}
        colorCode="#6B7280"
      />
    </div>
  );
};

export default Statistics;
