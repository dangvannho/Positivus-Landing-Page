import HighlightedTitle from "~/components/common/HighlightedTitle";
import Studies from "./components/Studies";

const CaseStudies = () => {
  return (
    <div className="mt-[65px] lg:mt-[163px]">
      <HighlightedTitle
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        className="laptop:w-[580px]"
      />
      <Studies />
    </div>
  );
};

export default CaseStudies;
