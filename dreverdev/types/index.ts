import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Experience = {
  id: string;
  name: string;
  desc_en: string;
  desc_es: string;
  startDate: string;
  endDate: string;
  company: string;
  image: string;
  sector: string;
}
