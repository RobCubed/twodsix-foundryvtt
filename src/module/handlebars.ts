import { Skill } from "types/Skill";

export default function registerHandlebarsHelpers():void {
  Handlebars.registerHelper({
    add: (v1, v2) => v1 + v2,
    sub: (v1, v2) => v1 - v2,
    mul: (v1, v2) => v1 * v2,
    div: (v1, v2) => v1 / v2,
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
      return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
  });

  Handlebars.registerHelper('getSkillByName', (items:ItemData<Skill>[], skillName:string) => {
    return getMatchingSkillByName(items, skillName);
  });

  Handlebars.registerHelper('getSkillValueByName', (items:ItemData<Skill>[], skillName:string) => {
    const matchingSkill:ItemData<Skill> = getMatchingSkillByName(items, skillName);

    if (matchingSkill) return matchingSkill.data.value;
    return null;
  });
}


const getMatchingSkillByName = (skills:ItemData<Skill>[], skillName:string) => {
  return skills.find((i) => {
    return i.type === 'skill' && i.name === skillName;
  });
};
