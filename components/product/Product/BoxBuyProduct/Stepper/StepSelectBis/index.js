import _ from 'lodash';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

// MATERIAL-UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import PropTypes from 'prop-types';

import { withWindowResize } from '../../../../../hoc';

import { configAttrActs, showImgAttributeActs } from '../../../../../../redux/actions';
import { dataFormat, priceCalc } from '../../../../../../utils';
import { Image } from '../../../../../common';
import WrapperStep from '../WrapperStep';

// "OVERRIDING" MUI COMPONENT STYLES https://material-ui.com/customization/globals/#css
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛
    root: {
      maxHeight: '200px',
      backgroundColor: 'brown',
      width: '325px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formControl: {
      root: {
        minWidth: '120px',
        width: '280px',
        backgroundColor: 'purple'
      }
    },
    MuiInputLabel: {
      root: {
        disableAnimation: 'false',
        marginTop: '-30px',
        width: '280px',
        height: '40px',
        color: 'rgb(217,217,217)',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      shrink: {
        display: 'none'
      }
    },
    MuiSelect: {
      root: {
        width: '280px',
        marginTop: '-20px'
      },
      icon: {
        color: 'rgb(217,217,217)',
        top: '-10px'
      }
    },
    MuiMenuItem: {
      root: {
        color: 'rgb(109, 109, 109)',
        width: '100%'
        // '&$hover': {
        //   color: 'rgba(109, 109, 109)'
        // }
      }
    },
    MuiInput: {
      root: {
        width: '100%'
      },
      input: {
        marginLeft: '5px',
        color: 'rgb(109, 109, 109)'
      }
    }
  }
});

function StepSelectBis(props) {
  const [selection, setSelection] = React.useState('');

  const onSubmit = (e, index, key) => {
    console.log('onChange launched', e.target.value);
    console.log('selection state = ', selection);
    const { item, pathKey } = props;
    // const { selection } = item;
    // const elem = values.filter(el => el.key === key);
    // const price = priceCalc.attribute(elem[0], item);

    // props.add({ [pathKey]: { item, key, price, value: elem[0] } });
  };

  const onMouseEnter = (elem) => {
    const { item } = props;
    const img = dataFormat.getPreviewImg(item, elem);

    if (img) {
      props.show(img);
    }
  };

  const onMouseLeave = (elem) => {
    const { item } = props;
    const img = dataFormat.getPreviewImg(item, elem);

    if (img) {
      props.remove();
    }
  };

  // const { config, title, item, screen } = this.props;
  const { config, screen } = props;

  const item = { values: ['item 1', 'item 2', 'item 3'] };
  const title = 'Título jarcodeado para pruebas con material UI';

  return (
    <WrapperStep
      title={title}
    >
      <div className="step-select">
        <div className="select_ui">
          <ThemeProvider theme={theme}>
            <form
              variant="standard"
              autoComplete="off"
            >
              {/* https://material-ui.com/es/api/form-control/ */}
              <FormControl>
                <InputLabel
                  // hintText=
                  htmlFor="age-simple"
                >
                  {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                </InputLabel>

                <Select
                  // value={values.age}
                  value={_.get(config, 'key', '')}
                  disableUnderline
                  fullWidth
                  onChange={onSubmit}
                  // inputProps={{
                  //   name: 'age',
                  //   id: 'age-simple'
                  // }}
                >
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}

                  {
                    item.values.map((v, index) => {
                      const elem = dataFormat.getDefaultProperties(v, item);


                      const isAvailable = _.get(elem, 'properties.availability', false);
                      // if (!isAvailable) return null;

                      const price = priceCalc.attribute(elem, item);
                      const img = _.get(elem, 'properties.imgMini', '');

                      const mouseEvents = {};
                      if (screen === 'lg') {
                        mouseEvents.onMouseEnter = () => onMouseEnter(elem);
                        mouseEvents.onMouseLeave = () => onMouseLeave(elem);
                      }

                      return (
                        <MenuItem
                          // key={elem.key}
                          key={index}
                          onClick={() => onMouseLeave(elem)}
                          onChange={e => setSelection(e.target.value)}
                          // value={elem.key}
                          value={v}
                          {...mouseEvents}
                        >
                          {v}

                          {/* {leftIcon={img ? <Image className="select_ui-item_img" src={img} size="mobile" /> : null} */}
                          {/* {primaryText={<span>{`${_.get(elem, 'name.es', '')} ${price === 0 ? '' : `+${dataFormat.formatCurrency(price, true)}`}`}</span>} */}

                        </MenuItem>
                      );
                    })
                  }

                </Select>

              </FormControl>
            </form>

          </ThemeProvider>

        </div>
      </div>

    </WrapperStep>
  );
}


StepSelectBis.propTypes = {
  config: PropTypes.object,
  item: PropTypes.object.isRequired,
  pathKey: PropTypes.string.isRequired,
  title: PropTypes.string
};

StepSelectBis.defaultProps = {
  config: {},
  title: ''
};

export default connect(null, {
  add: configAttrActs.add,
  show: showImgAttributeActs.show,
  remove: showImgAttributeActs.remove
})(withWindowResize(StepSelectBis));
