import ScrollFadeUp from "./ScrollFadeUp";

interface Badge {
  text: string;
  color: string;
}

interface Props {
  title: string;
  description: string;
  image: string;
  badges: Badge[];
}

const Card = ({ title, description, image, badges }: Props) => {
  return (
    <ScrollFadeUp>
      <div className=" p-3 max-w-130 backdrop-blur-3xl rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 overflow-hidden">
        <img src={image} alt={title} className="h-70 rounded-2xl" />
        <div className="flex flex-col gap-2 items-start w-full">
          <h2 className="text-gray-300 text-2xl">{title}</h2>
          <p className="text-gray-400 mb-2">{description}</p>
          <div className="flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`${badge.color} text-gray-200 px-2 py-1 rounded-full text-sm`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollFadeUp>
  );
};

export default Card;
