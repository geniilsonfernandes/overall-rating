import Checkbox from ".";

export default {
  title: "Form/Checkbox",
  component: Checkbox
};

export const Default = (args) => (
  <Checkbox onChecked id="sim" value="yes" {...args}>
    Sim
  </Checkbox>
);

Default.args = {
  onCheck: () => {},
  name: "terms"
};
