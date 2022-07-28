import Radio from ".";

export default {
  title: "Form/Radio",
  component: Radio,
}

export const Default = (args) => <div>
  <Radio onChecked id="sim" value="yes"{...args} >Sim</Radio>
  <Radio onChecked id="nao" value="no" {...args} >não</Radio>
</div>;

Default.args = {
  onCheck: () => { },
  name: "recommed"
};