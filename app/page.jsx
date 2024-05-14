import Image from "next/image";
import Tracker from "../app/components/Tracker";
import TaskList from "../app/components/TaskList";
import Graph from "../app/components/Graph";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full items-center p-5 gap-6 bg-[#212121]">
      {/* Task Tracking Bar */}
      <Tracker />
      {/* List of all tasks */}
      <TaskList />
      {/* BarGraph */}
      <Graph />
    </div>
  );
}
