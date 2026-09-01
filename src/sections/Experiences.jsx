import { Timeline } from "../components/Timeline";
import { education } from "../constants";

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={education} />
    </div>
  );
};

export default Experiences;
