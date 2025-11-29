import { InterestCard } from './InterestCard';

type Props = {
  className?: string;
  // define your other props here
};

const interests = [
  {
    heading: 'Sustainability',
    content:
      'Designing eco-friendly solutions that balance innovation, efficiency, and long-term environmental responsibility, while encouraging mindful resource use and promoting scalable practices that benefit both communities and future generations.',
  },
  {
    heading: 'Marketing',
    content:
      'Crafting compelling narratives and strategies that connect audiences with products through creativity and insights, blending storytelling with data-driven approaches to build trust, strengthen engagement, and drive meaningful brand growth across diverse channels.',
  },
  {
    heading: 'Dog Walking',
    content:
      'Enjoying outdoor walks with dogs, fostering health, companionship, and joyful routines for pets and owners, while creating opportunities for exercise, social interaction, and reinforcing the bond between humans and their furry companions.',
  },
];

export const Interests: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col flex-1 gap-4 lg:gap-4 p-4 text-primary-content ${className ?? ''}`}
    >
      <h3 className="text-xl font-medium">My interests🎈</h3>
      <div className="flex flex-col gap-y-4">
        {interests.map((item) => (
          <div key={item.heading}>
            <InterestCard heading={item.heading} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};
