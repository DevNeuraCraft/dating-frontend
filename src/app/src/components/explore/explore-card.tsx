import ExploreCardMediaContainer from "@components/explore/explore-card-media-container";
import ExploreCardDescription from "@components/explore/explore-card-description";
import ExploreCardButtonContainer from "@components/explore/explore-card-buttons-container";

interface ExploreCardProps {
  name: string;
  age: number;
  city: string;
  about: string;
  images: string[];
}

export default function ExploreCard({
  name,
  age,
  city,
  about,
  images,
}: ExploreCardProps) {
  return (
    <div>
      <ExploreCardMediaContainer mediasUrl={images} />
      <ExploreCardDescription name={name} age={age} about={about} city={city} />
      <ExploreCardButtonContainer />
    </div>
  );
}
