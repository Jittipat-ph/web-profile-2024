import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Logician (INTP-A)</p>
        <p className="pb-2">
          Logicians are innovative inventors with an unquenchable thirst for knowledge.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>INTUITIVE</Badge>
          <Badge>THINKING</Badge>
          <Badge>PROSPECTING</Badge>
          <Badge>ASSERTIVE</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
