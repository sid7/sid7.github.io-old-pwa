import React, { Component } from "react";

function Laz(comp) {
  class LazLoad extends Component {
    constructor() {
      super();
      this.state = {
        LazComp: null
      };
    }
    async componentDidMount() {
      if (!this.state.LazComp) {
        comp().then(({ default: LazComp }) => {
          this.setState({ LazComp });
        });
      }
    }
    render() {
      const {
        state: { LazComp }
      } = this;
      return LazComp ? (
        <LazComp />
      ) : (
        <div>
          <h1>Loading..</h1>
        </div>
      );
    }
  }
  return LazLoad;
}

const Home = Laz(() => import("./Home"));
const About = Laz(() => import("./About"));
const ShowTime = Laz(() => import("./ShowTime"));
const Portfolio = Laz(() => import("./Portfolio"));
const Contact = Laz(() => import("./Contact"));
const Page404 = Laz(() => import("./Page404"));

export { Home, About, ShowTime, Portfolio, Contact, Page404 };
