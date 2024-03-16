import React from "react";
import { Skeleton } from "../components/ui/skeleton";


const Loading = () => {
  return (
    <div>
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  );
};

export default Loading;
