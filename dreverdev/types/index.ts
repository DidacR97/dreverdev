import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ExperienceType = {
  _id: string;
  name: string;
  desc_en: string;
  desc_es: string;
  startDate: number;
  endDate: number;
  company: string;
  image: string;
  sector: string;
  skills: SkillType[]
}

export type EducationType = {
  _id: string;
  name: string;
  desc_en: string;
  desc_es: string;
  startDate: number;
  endDate: number;
  place: string;
  image: string;
  skills: SkillType[]
}

export type SkillType = {
  _id: string;
  name: String,
  desc_en: String,
  desc_es: String,
  link: String,
  image: String,
  type: String,
}
