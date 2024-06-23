import React from "react";
import Card from "./common/Card";

type Props = {};

const Bio = (props: Props) => {
  return (
    <Card title="Bio">
      <div>
        Jittipat Phedseng is currently a 4th year undergraduate in Computer Engineering and Artificial
        Intelligence at Walailak University. He participated in TESA Top Gun Rally 2023 in team `Future
        Foragers`. Currently, he is working on a project aim to detect bedridden patient emotions by predicting from Physiological Signal, focus on
        Electrodermal-activity (EDA), using the combination between Artificial Intelligence and IoT
        device.
      </div>
    </Card>
  );
};

export default Bio;
