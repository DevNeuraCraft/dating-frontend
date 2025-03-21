import ExploreCardMedia from "@components/explore/explore-card-media";

interface ExploreCardMediaContainerProps {
  mediasUrl: string[];
}

export default function ExploreCardMediaContainer({
  mediasUrl,
}: ExploreCardMediaContainerProps) {
  return (
    <div className="grid grid-cols-2 h-[441px] max-xs-h:h-[301px] md:h-[441px] gap-px">
      <ExploreCardMedia mediaUrl={mediasUrl[0]} classes="rounded-s-xl" />
      <div className="grid gap-px">
        <ExploreCardMedia
          mediaUrl={mediasUrl[1]}
          classes="max-xs-h:h-[150px] h-[220px] rounded-tr-xl"
        />
        <ExploreCardMedia
          mediaUrl={mediasUrl[2]}
          classes="max-xs-h:h-[150px] h-[220px] rounded-br-xl"
        />
      </div>
    </div>
  );
}
