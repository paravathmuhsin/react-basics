"use strict";

class Test  extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { liked: false };
  }

  render() {
    return React.createElement(
      "h6",
      { id: "child" },
      'This is child'
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { liked: false };
  }

  render() {
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    return React.createElement(
      "p",
      { id: "test", className: 'jdhdhf' },
      React.createElement(Test)
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(React.createElement(LikeButton), domContainer);
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(LikeButton));
