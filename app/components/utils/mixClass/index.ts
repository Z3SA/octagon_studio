import IMixClass from './MixClass.interface';

const generateMixClass = (classes: IMixClass[]): string => {
  let finalClass = '';

  classes
    .filter(elem => elem.condition || elem.isDefault)
    .forEach(elem => {
      finalClass += ` ${elem.name}`;
    });

  return finalClass.trim();
};

export default generateMixClass;
