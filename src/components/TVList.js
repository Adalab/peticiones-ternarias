import React, {Component} from "react";

class TVList extends Component {
  render() {
    return (
      <ul className="tv">
          {this.props.results.map(item=>{
            return (
              <li className="tv__item" key={item.show.id}>
                <h2 className="tv__name">{item.show.name}</h2>
              </li>
            );
          })}
        </ul>
    );
  }
}

export default TVList;