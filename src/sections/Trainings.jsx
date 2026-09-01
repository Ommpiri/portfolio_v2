import Project from "../components/Project";
import { myTrainings } from "../constants";

const Trainings = () => {
  return (
    <section className="relative c-space section-spacing" id="training">
      <h2 className="text-heading">Training & Experience</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myTrainings.map((training) => (
        <Project key={training.id} {...training} />
      ))}
    </section>
  );
};

export default Trainings;
