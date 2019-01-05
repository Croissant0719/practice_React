import * as React from "react";

interface Props {
  name;
}
interface State {}

class HelloReact extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>お名前: {this.props.name}</div>;
  }
}

export default HelloReact;
