/*
Use generics and interfaces to fix the error in the following classes:
*/

interface ComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
