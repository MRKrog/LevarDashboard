import React, { Component } from 'react';
// import './Drawer.scss';
// import styled from 'styled-components';

// const Main = styled.main`
//     position: relative;
//     overflow: hidden;
//     transition: all .15s;
//     padding: 0 20px;
//     margin-left: ${props => (props.expanded ? 240 : 64)}px;
// `;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'home',
      expanded: false
    }
  }

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = () => {

    this.setState({ expanded: !this.state.expanded });
  };

  navigate = (pathname) => () => {
    this.setState({ selected: pathname });
  };

  render() {
    const { expanded, selected } = this.state;
    console.log(this.state);

    return (
      <div className="Drawer" style={{ width: expanded ? 240 : 64 }}>
        <div>
            <button onClick={() => this.onToggle()} />
            <div onClick={this.navigate('home')}>
                <div>
                    <div>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                    </div>
                    <div style={{ paddingRight: 32 }} title="Home">
                        Home
                    </div>
                </div>
            </div>
            <div onClick={this.navigate('more')} selected={selected}>
                <div>
                    <div>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                    </div>
                    <div style={{ paddingRight: 32 }} title="Home">
                        More
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Drawer;
