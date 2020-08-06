export interface Skill {
  description: string;
  value: number;
  notes: string;
  label: string;
  name: string;
  subtype: string;
  reference: string;
  defaultCharacteristics: string;
  cascade: boolean;
  specialization: string;
  sort: number;
  tasks: SkillTask[];
}

export interface SkillTask {
  name: string;
  description: string;
  characteristic: string;
  timeIncrement: string;
  difficulty: string;
}
