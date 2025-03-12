import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  iconDefinition: IconDefinition;
  size?: SizeProp;
  classes?: string;
}

export default function Icon({ iconDefinition, size, classes }: IconProps) {
  return (
    <FontAwesomeIcon icon={iconDefinition} size={size} className={classes} />
  );
}