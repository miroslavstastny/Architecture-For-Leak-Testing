import * as React from "react";

class TestClass extends React.Component<{}, {count: number}> {
  constructor(props:{}) {
    super(props);
    this.state = {count: 0};
  }
  render() {
  return <div>Class Foo {this.state.count}</div>;
  }
  componentDidMount() {
    console.log("Foo - componentDidMount");
    this.setState({count: 1})
  }
  componentWillUnmount() {
    console.log("Foo - componentWillUnmount");
  }
}
const TestFC: React.FunctionComponent = () => {
  const [state, setState] = React.useState(1);
  React.useEffect(() => {
    console.log("FooFC - componentDidMount");
    setState(2);
    return () => console.log("FooFC - componentWillUnmount");
  }, []);
  return <div>Functional Foo ${state}</div>;
}

export const Test = () => {
  return (
    <TestClass />
  );
};