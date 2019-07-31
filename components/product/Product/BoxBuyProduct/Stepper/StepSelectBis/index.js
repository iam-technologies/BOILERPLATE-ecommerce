import _ from 'lodash';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  form: {
    maxHeight: '200px',
    width: '325px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
    backgroundColor: 'blue'
  },
  labelField: {
    color: 'red',
    marginTop: '-20px'
  },
  select: {
    backgroundColor: 'green',
    marginTop: '-20px'
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2)
  // },
  icon: {
    color: 'rgb(217,217,217)'
  }
}));

function StepSelectBis(props) {
  const classes = useStyles();

  // this.onChange = this.onChange.bind(this);
  // this.onMouseEnter = this.onMouseEnter.bind(this);
  // this.onMouseLeave = this.onMouseLeave.bind(this);
  // const onAddAttr = bindActionCreators(configAttrActs, props.dispatch);
  // const onShowImg = bindActionCreators(showImgAttributeActs, props.dispatch);


  const innerDivStyle = { padding: '0px 20px 0px 20px', marginBottom: '5px', color: 'red' };

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
          <form
            variant="standard"
            className={classes.form}
            autoComplete="off"
          >
            <FormControl
              className={classes.formControl}
            >
              <InputLabel
                htmlFor="age-simple"
                className={classes.labelField}
              >
                PERSONALIZA TU PRODUCTO
              </InputLabel>

              <Select
                value={_.get(config, 'key', '')}
                disableUnderline
                fullWidth
                onChange={onChange}
                classes={{
                  select: classes.select,
                  icon: classes.icon,
                  selectMenu: classes.selectMenu,
                  inputLabel: classes.inputLabel,
                  input: classes.inputField
                }}

                // inputProps={{
                //   name: 'age',
                //   id: 'age-simple'
                // }}
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
                } */}

              </Select>

            </FormControl>
          </form>
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
