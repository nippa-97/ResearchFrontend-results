import React from "react";
import Boards from "../../components/boards/Boards";
import TopBar from "../../components/topBar/TopBar";
import { UrlData } from "../../Data/UrlData.js";
import { CardData } from "../../Data/CardData.js";

export default function Dashboard() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
    {/* <div style={{ "height": "100vh", "backgroundColor": "#F7F5F5" }}> */}
      <TopBar />
      <Boards UrlData={UrlData} CardData={CardData} data={data} axes={axes} />
    {/* </div> */}
    </>
  );
}
