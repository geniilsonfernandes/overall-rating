import RatingCard from ".";

import mock from "./mock";

export default {
  title: "Form/RatingCard",
  component: RatingCard
};

export const Default = (args) => (
  <div
    style={{
      margin: " 0 auto",
      maxWidth: "1200px"
    }}
  >
    <RatingCard {...args} {...mock} />
  </div>
);
