import _ from 'lodash';
import { bindActionCreators } from 'redux';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import { withWindowResize } from '../../../../../hoc';

import { configAttrActs, showImgAttributeActs } from '../../../../../../redux/actions';
import { dataFormat, priceCalc } from '../../../../../../utils';
import { Image } from '../../../../../common';
import WrapperStep from '../WrapperStep';


class StepSelect extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onAddAttr = bindActionCreators(configAttrActs, props.dispatch);
    this.onShowImg = bindActionCreators(showImgAttributeActs, props.dispatch);

    this.styleLabel = { color: '#9B9B9B', fontSize: '16px', letterSpacing: '0.98px' };
    this.innerDivStyle = { padding: '0px 20px 0px 20px', marginBottom: '5px' };
  }


  onChange(e, index, key) {
    const { item, pathKey } = this.props;
    const { values } = item;

    const elem = values.filter(el => el.key === key);
    const price = priceCalc.attribute(elem[0], item);

    this.onAddAttr.add({ [pathKey]: { item, key, price, value: elem[0] } });
  }


  onMouseEnter(elem) {
    const { item } = this.props;
    const img = dataFormat.getPreviewImg(item, elem);

    if (img) {
      this.onShowImg.show(img);
    }
  }


  onMouseLeave(elem) {
    const { item } = this.props;
    const img = dataFormat.getPreviewImg(item, elem);

    if (img) {
      this.onShowImg.remove();
    }
  }

  render() {
    const { config, title, item, screen } = this.props;

    return (
      <WrapperStep
        title={title}
      >
        <div className="step-select">
          <div className="select_ui">
            <SelectField
              fullWidth
              hintText={title.length > 25 ? `${title.substr(0, 25)}...` : title}
              labelStyle={this.styleLabel}
              maxHeight={200}
              menuItemStyle={this.styleLabel}
              onChange={this.onChange}
              selectedMenuItemStyle={{ color: '#323C47' }}
              underlineShow={false}
              value={_.get(config, 'key', '')}
            >
              {
                item.values.map((v) => {
                  const elem = dataFormat.getDefaultProperties(v, item);

                  const isAvailable = _.get(elem, 'properties.availability', false);
                  if (!isAvailable) return null;

                  const price = priceCalc.attribute(elem, item);
                  const img = _.get(elem, 'properties.imgMini', '');

                  const mouseEvents = {}
                  if (screen === 'lg') {
                    mouseEvents.onMouseEnter = () => this.onMouseEnter(elem);
                    mouseEvents.onMouseLeave = () => this.onMouseLeave(elem);
                  }

                  return (
                    <MenuItem
                      innerDivStyle={this.innerDivStyle}
                      key={elem.key}
                      leftIcon={img ? <Image className="select_ui-item_img" src={img} size="mobile" /> : null}
                      onClick={() => this.onMouseLeave(elem)}
                      primaryText={<span>{`${_.get(elem, 'name.es', '')} ${price === 0 ? '' : `+${dataFormat.formatCurrency(price, true)}`}`}</span>}
                      value={elem.key}
                      {...mouseEvents}
                    />
                  );
                })
              }
            </SelectField>
          </div>
        </div>
      </WrapperStep>
    );
  }
}


StepSelect.propTypes = {
  config: PropTypes.object,
  item: PropTypes.object.isRequired,
  pathKey: PropTypes.string.isRequired,
  title: PropTypes.string
};

StepSelect.defaultProps = {
  config: {},
  title: ''
};

export default withWindowResize(StepSelect);