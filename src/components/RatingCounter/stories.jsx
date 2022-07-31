import RatingCounter from ".";

export default {
  title: "Form/RatingCounter",
  component: RatingCounter
};

export const Default = (args) => (
  <RatingCounter {...args} onRating={() => {}} />
);
