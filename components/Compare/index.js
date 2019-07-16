import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
import Link from 'next/link';

import { ButtonInput } from '../common';

class Compare extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    // this.showCompare = this.showCompare.bind(this);
  }

  onClick() {
    const { onClickCompare } = this.props;
    onClickCompare();
  }

  // showCompare() {
  // }

  render() {
    const { clickCompare, selected, catName, selectedItems } = this.props;
    console.log('catName: ', catName);
    console.log('selectedItems: ', selectedItems);
    const showCompare = (selected && selected.length > 1) || false;
    const pathname = `/comparador-de-productos/${catName}`;
    // const idString = selectedItems.map(el => el._id).join('-');
    const idString = JSON.stringify(selectedItems);

    return (
      <section className="compare_ui">
        <div className="compare_ui-header">
          {
            showCompare && (
              <React.Fragment>
                <Link
                  href={{ pathname, query: { selectedItems: idString, catName } }}
                  // to={{
                  //   pathname,
                  //   state: { selectedItems, catName }
                  // }}
                >
                  <ButtonInput
                    label="VER COMPARATIVA"
                    icon="/images/icon_compare.png"
                    className="compare_ui-button"
                    onClick={() => { }}
                  />
                </Link>
                { clickCompare && <span> Selecciona hasta 3 productos para comparar</span> }
              </React.Fragment>
            )
          }
          {
            !showCompare && (
              <React.Fragment>
                <ButtonInput
                  label="COMPARAR"
                  icon="/images/icon_compare.png"
                  className={`compare_ui-button ${clickCompare ? 'compare_ui-button-active' : 'compare_ui-button-inactive'}`}
                  onClick={this.onClick}
                />
                { clickCompare && <span> Selecciona hasta 3 productos para comparar</span> }
              </React.Fragment>
            )
          }

        </div>
      </section>
    );
  }
}

export default Compare;
