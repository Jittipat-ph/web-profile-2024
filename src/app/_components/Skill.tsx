import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faNodeJs} className="h-10" />
          <p>NodeJS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDatabase} className="h-10" />
          <p>SQL & NoSQL Databse</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDocker} className="h-10" />
          <p>Docker</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
