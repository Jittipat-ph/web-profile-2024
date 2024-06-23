import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Get more and more better at Coding</li>
          <li>Learn how computer, internet and stuffs work</li>
          <li>Improve English skills and learn more language</li>
          <li>Improve communication skills</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
