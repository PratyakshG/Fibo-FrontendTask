"use client";

import Image from "next/image";
import circles from "../../public/circles.png";
import { useSelector } from "react-redux";

const Tracker = () => {
  const todos = useSelector((state) => state.todos.todos);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const completionPercentage = totalTasks
    ? (completedTasks / totalTasks) * 100
    : 0;

  return (
    <>
      <div className="flex w-full rounded-2xl items-center justify-center px-5 py-3 bg-[radial-gradient(76.6%_1399.07%_at_85.71%_100%,#0E77D9_0%,#7DA7CE_100%)]">
        <div className="w-1/4 h-full">
          <Image
            src={circles}
            alt="circles"
            width={60}
          />
        </div>
        <div className="w-3/4 flex flex-col max-h-full">
          <span className="font-bold text-sm leading-[18.5px]">
            Your Daily Goal Almost Done
          </span>
          <span className="text-[#E1EAF2] text-xs leading-[18.5px]">
            {/* give a dynamic value of all tasks and tasks completed */}
            {completedTasks} Of {totalTasks} Completed
          </span>
          <div className="flex flex-col mt-3">
            {/* Progress Bar calculated from total task completed out of all tasks */}
            <div className="w-full bg-[#ffffff20]">
              <div
                className={`h-[2px] bg-white`}
                style={{
                  width: `${completionPercentage}%`,
                }}
              />
            </div>
            <span className="text-[10px] text-right">
              {/* Calculated value of percentage coming from the redux store and tasks completed */}
              {completionPercentage}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
