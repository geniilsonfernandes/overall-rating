import Input from ".";

export default {
  title: "Form/Input",
  component: Input,
}

export const Default = (args) => <Input {...args} />;

Default.args = {
  label: "Review title",
  placeholder: "Example: Easy to use",
  id: "review",
  type: "text",
};