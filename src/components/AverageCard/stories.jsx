import AverageCard from ".";

export default {
  title: "AverageCard",
  component: AverageCard
};

export const Default = (args) => (
  <div
    style={{
      margin: " 0 auto",
      maxWidth: "1200px"
    }}
  >
    <AverageCard {...args} rating={4.5} />
  </div>
);
