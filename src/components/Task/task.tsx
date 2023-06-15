import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function Task() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  return (
    <>
      <div className="h-[72px] p-4 rounded-lg bg-gray-500 flex-row inline-flex items-center w-full justify-between">
        <div className="flex-row inline-flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 mr-2 text-purple-dark bg-gray-500 border-blue-500 rounded-xl focus:ring-purple-purple focus:ring-3 ring-blue-500"
            onChange={() => {
              setIsTaskCompleted(!isTaskCompleted);
            }}
          />

          <p
            className="text-gray-100"
            style={{
              textDecoration: `${isTaskCompleted ? "line-through" : ""}`,
              color: `${isTaskCompleted ? "#808080" : "#F2F2F2"}`,
            }}
          >
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.{" "}
          </p>
        </div>
        <div className="">
          <Trash size={24} className="text-gray-300" />
        </div>
      </div>
    </>
  );
}
