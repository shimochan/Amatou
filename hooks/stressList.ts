import { useState } from "react"
import { StressItem } from "../types"

const stressListController = () => {
  let list: StressItem[] = [
    {
      title: "Test 1",
      intensity: 0,
      dueDate: new Date(),
      isDone: false,
    },
    {
      title: "Test 2",
      intensity: 1,
      dueDate: new Date(),
      isDone: true,
    },
    {
      title: "Test 3",
      intensity: 2,
      dueDate: new Date(),
      isDone: false,
    },
  ];
  const [stressList, setStressList] = useState(list);

  return { stressList, setStressList };
}

export default stressListController;