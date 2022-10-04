export enum ExerciseId {
  ex1 = 'ex1',
  ex2 = 'ex2',
  ex3 = 'ex3',
}

export type ExerciseSummary = {
  id: ExerciseId;
  title: string;
  imgSrc: string;
  paragraph: string;
  frontendSrc: string;
};

export const exerciseSummarys: {
  [id in ExerciseId]: ExerciseSummary;
} = {
  [ExerciseId.ex3]: {
    id: ExerciseId.ex3,
    title: 'Notifications page',
    imgSrc: `/images/projects/${ExerciseId.ex3}/project-summary.png`,
    paragraph: 'I tried compound react component in this exercise. :)',
    frontendSrc:
      'https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC',
  },
  [ExerciseId.ex1]: {
    id: ExerciseId.ex1,
    title: 'Product Preview Card Component',
    imgSrc: `/images/projects/${ExerciseId.ex1}/project-summary.png`,
    paragraph:
      'This is my first and most inspiring experience with the tailwind, I choose a simple one for practice. This is fun to learn tailwind config and remember many tailwind CSS properties. It is convenient and speeds me up on the frontend development.',
    frontendSrc:
      'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
  },
  [ExerciseId.ex2]: {
    id: ExerciseId.ex2,
    title: 'QR Code Component',
    imgSrc: `/images/projects/${ExerciseId.ex2}/project-summary.png`,
    paragraph: 'A quick practice for familiar work flow.',
    frontendSrc:
      'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
  },
};
