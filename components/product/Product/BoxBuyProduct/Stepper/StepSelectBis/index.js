import _ from 'lodash';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// to access m-UI styles
// import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import { withWindowResize } from '../../../../../hoc';

import { configAttrActs, showImgAttributeActs } from '../../../../../../redux/actions';
import { dataFormat, priceCalc } from '../../../../../../utils';
import { Image } from '../../../../../common';
import WrapperStep from '../WrapperStep';

// OVERRIDING MUI COMPONENT STYLES https://material-ui.com/customization/globals/#css
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
      width: '100%',
      backgroundColor: 'pink',
      color: 'blue',
      selected: {
        color: 'red'
      }
    }
  }
});

function StepSelectBis(props) {
  // this.onChange = this.onChange.bind(this);
  // this.onMouseEnter = this.onMouseEnter.bind(this);
  // this.onMouseLeave = this.onMouseLeave.bind(this);
  // const onAddAttr = bindActionCreators(configAttrActs, props.dispatch);
  // const onShowImg = bindActionCreators(showImgAttributeActs, props.dispatch);

  const [values, setValues] = React.useState({
    age: '',
    name: 'hai'
  });


  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const onChange = (e, index, key) => {
    const { item, pathKey } = props;
    const { values } = item;

    const elem = values.filter(el => el.key === key);
    const price = priceCalc.attribute(elem[0], item);

    props.add({ [pathKey]: { item, key, price, value: elem[0] } });
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
  const { config, item, screen } = props;

  // const item = { values: ['item 1', 'item 2', 'item 3'] };
  const title = 'Título jarcodeado para pruebas con material UI';

  return (
    <WrapperStep
      title={title}
    >
      <div className="step-select">
        <div className="select_ui">


          {/* <form
            variant="standard"
            className={classes.form}
            autoComplete="off"
          >
            // https://material-ui.com/es/api/form-control/
            <FormControl
              className={classes.formControl}
            >
              <InputLabel
                // focused
                disableAnimation={false}// solo desactiva la transición
                // shrink={false} // solo desactiva el efecto
                // disabled
                htmlFor="age-simple"
                claYssName={classes.labelField}
              >
                PERSONALIZA TU PRODUCTO
              </InputLabel>

              <Select
                value={_.get(config, 'key', '')}
                disableUnderline
                fullWidth
                onChange={onChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                {/* {
                  item.values.map((v) => {
                    console.log('v / item ', v, '/', item);

                    const elem = dataFormat.getDefaultProperties(v, item);
                    console.log('elem: ', elem);

                    const isAvailable = _.get(elem, 'properties.availability', false);
                    if (!isAvailable) return null;

                    const price = priceCalc.attribute(elem, item);
                    const img = _.get(elem, 'properties.imgMini', '');

                    const mouseEvents = {};
                    if (screen === 'lg') {
                      mouseEvents.onMouseEnter = () => this.onMouseEnter(elem);
                      mouseEvents.onMouseLeave = () => this.onMouseLeave(elem);
                    }

                    return (
                      <MenuItem
                        innerdivs0tyle={this.innerDivStyle}
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

              </Select>

            </FormControl>
          </form>
         */}

          <ThemeProvider theme={theme}>
            <form
              variant="standard"
              autoComplete="off"
            >
              {/* https://material-ui.com/es/api/form-control/ */}
              <FormControl>
                <InputLabel
                  htmlFor="age-simple"
                >
                PERSONALIZA TU PRODUCTO
                </InputLabel>

                <Select
                  value={values.age}
                // value={_.get(config, 'key', '')}
                  disableUnderline
                  fullWidth
                  onChange={handleChange}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple'
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>

                  {/* {
                item.values.map((v) => {
                  console.log('v / item ', v, '/', item);

                  const elem = dataFormat.getDefaultProperties(v, item);
                  console.log('elem: ', elem);

                  const isAvailable = _.get(elem, 'properties.availability', false);
                  if (!isAvailable) return null;

                  const price = priceCalc.attribute(elem, item);
                  const img = _.get(elem, 'properties.imgMini', '');

                  const mouseEvents = {};
                  if (screen === 'lg') {
                    mouseEvents.onMouseEnter = () => this.onMouseEnter(elem);
                    mouseEvents.onMouseLeave = () => this.onMouseLeave(elem);
                  }

                  return (
                    <MenuItem
                      innerdivs0tyle={this.innerDivStyle}
                      key={elem.key}
                      leftIcon={img ? <Image className="select_ui-item_img" src={img} size="mobile" /> : null}
                      onClick={() => this.onMouseLeave(elem)}
                      primaryText={<span>{`${_.get(elem, 'name.es', '')} ${price === 0 ? '' : `+${dataFormat.formatCurrency(price, true)}`}`}</span>}
                      value={elem.key}
                      {...mouseEvents}
                    />
                  );
                })
              } */}

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
