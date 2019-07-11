import React, { Component } from "react";
export default class Header extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <header className="s-header">
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            {resumeData.sections &&
              resumeData.sections.map((item, i) => {
                return (
                  <li className="" key={i}>
                    <a
                      className="smoothscroll"
                      href={`#${item.toLowerCase()}`}
                      title={item.toLowerCase()}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>
        <a className="header-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </header>
    );
  }
}
