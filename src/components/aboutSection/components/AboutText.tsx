type Props = {
  className?: string;
  // define your other props here
};

export const AboutText: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col flex-1 gap-4 lg:gap-4 p-4 ${className ?? ''}`}
    >
      <h2 className="text-xl font-semibold text-primary-content">🫧 About</h2>
      <h3 className="text-lg font-medium">Get to know me!☀️</h3>
      <p>
        PLACEHOLDEEER I'm a Helsinki-born Interaction Design MSc student at the
        University of Turku.I've recently kickstarted my career in data
        visualisation as a designer-developer.
        <br />
        <br />
        Early in my studies I developed an interest towards the visual aspects
        of tech, particularly UI/UX & frontend development.I'm eager to explore
        diverse opportunities to utilize my skills in creating cool s***.
        <br />
        <br />
        As I'm heading into my final year of studies, I'm open to discussing
        potential master's thesis topics that could benefit your company! I'm
        eager to explore diverse opportunities to utilize my skills in creating
        cool s***.
        <br />
        <br />
        As I'm heading into my final year of studies, I'm open to discussing
        potential master's thesis topics that could benefit your company!
      </p>
    </div>
  );
};
