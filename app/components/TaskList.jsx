"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/todoSlice";
import Image from "next/image";

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col gap-4">
      <span>Today's Goal</span>
      <ul className="flex flex-col gap-[10px]">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-[#282828] flex rounded-xl px-4 py-3 items-center gap-3"
          >
            {/* list of all tasks */}
            <div className="bg-[#3d3d3d] p-2 rounded-md h-8 w-8 flex items-center justify-center">
              <Image
                src={todo.icon}
                alt="icon"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-white font-medium text-base">
                {todo.text}
              </span>

              {/* checkbox to input whether the task has been completed */}
              <input
                type="checkbox"
                checked={todo.completed}
                className={`appearance-auto checked:accent-purple-600 w-8 h-8 rounded-[10px]`}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Swipe Button */}
      <div className="w-full h-12 flex bg-[#D15439] rounded-full items-center justify-between p-1">
        <p className="bg-white text-[#D15439] rounded-full h-[40px] w-[40px] text-[10px] text-center content-center font-bold">
          Track
        </p>
        <p className="font-semibold">Swipe to track all</p>
        <p className="mr-3">
          {">"}
          {">"}
          {">"}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
