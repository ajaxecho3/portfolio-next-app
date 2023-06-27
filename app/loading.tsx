import React from "react";
import { Skeleton } from "../components/ui/skeleton";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div>
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  );
};

export default Loading;
