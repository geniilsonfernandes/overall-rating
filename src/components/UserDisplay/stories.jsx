import UserDisplay from ".";


export default {
  title: "UserDisplay",
  component: UserDisplay
};

export const Default = (args) => <div style={{
  margin: " 0 auto",
  maxWidth: "1200px"
}}>
  <UserDisplay {...args} />
</div>;

Default.args = {
  user: "jhon",
  excerpt: "Designer",
  src: "jhon.png",
}