/** Add your relevant code here for the issue to reproduce */
export default function Home(props) {
  console.log("props", props);
  const path = props.params.path ? `/${props.params.path.join('/')}` : '/';
  return (<span>This is Home lang <b>{props.params.lang}</b> path <b>{path}</b></span>);
}
