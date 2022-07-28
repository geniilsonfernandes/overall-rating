import TextArea from ".";

export default {
  title: "Form/TextArea",
  component: TextArea,
}

export const Default = (args) => <TextArea {...args} />;

Default.args = {
  label: "Product review",
  placeholder: "i have a dream",
  id: "review",
};