import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { msgUI } from '../../../utils';
import { TextInput, RadioInput } from '../../common';
import SendToOther from './SendToOther';
import SendOffice from './SendOffice';


export default class StepOne extends Component {
  constructor(props) {
    super(props);

    this.onChange = props.onChange.bind(this);
    this.getForm = this.getForm.bind(this);
  }


  getForm(item, errors, type, user, disabled = false) {
    switch (type) {
      case 'anotherPerson': return (
        <SendToOther
          errors={errors}
          item={item}
          onChange={this.onChange}
          showAllField
          disabled={disabled}
        />
      );

      case 'myAddress': return (
        <SendToOther
          errors={errors}
          item={item}
          onChange={this.onChange}
          user={user}
          disabled={disabled}
        />
      );

      case 'cocholate': return <SendOffice />;

      default: return null;
    }
  }

  render() {
    const { item, errors, user, disabled } = this.props;

    const sendOrderType = _.get(item, 'sendOrderType', '');
    const renderForm = this.getForm(item, errors, sendOrderType, user, disabled);

    return (
      <div className="step_send_info">
        <p className="title-xs">Datos Personales</p>

        <TextInput
          error={msgUI.get(errors, 'name')}
          hintLabel="Nombre"
          label="NOMBRE"
          onChange={this.onChange}
          path="name"
          value={_.get(item, 'name', '')}
          disabled={disabled}
        />

        <TextInput
          error={msgUI.get(errors, 'lastname')}
          hintLabel="Apellidos"
          label="APELLIDOS"
          onChange={this.onChange}
          path="lastname"
          value={_.get(item, 'lastname', '')}
          disabled={disabled}
        />

        <TextInput
          error={msgUI.get(errors, 'email')}
          hintLabel="Email"
          label="EMAIL"
          onChange={this.onChange}
          path="email"
          type="email"
          value={_.get(item, 'email', '')}
          disabled={disabled}
        />

        <TextInput
          error={msgUI.get(errors, 'phone')}
          hintLabel="Teléfono de contacto"
          label="TU TELÉFONO DE CONTACTO"
          onChange={this.onChange}
          path="phone"
          value={_.get(item, 'phone', '')}
          disabled={disabled}
        />

        {
          !disabled ? (
            <div className="check_send_order">
              <p className="title">¿El pedido lo debe recibir otra persona?</p>

              <RadioInput
                active={sendOrderType === 'anotherPerson'}
                path="sendOrderType"
                onChange={this.onChange}
                value="anotherPerson"
              >Sí, quiero enviarlo directamente a otra persona.
              </RadioInput>

              <RadioInput
                active={sendOrderType === 'myAddress'}
                path="sendOrderType"
                onChange={this.onChange}
                value="myAddress"
              >No, quiero recibirlo en mi dirección.
              </RadioInput>

              <RadioInput
                active={sendOrderType === 'cocholate'}
                path="sendOrderType"
                onChange={this.onChange}
                value="cocholate"
              >Quiero recogerlo en las oficinas de Cocholate.
              </RadioInput>
            </div>
          ) : (
            <div className="check_send_order">
              <p className="title">Dirección de envío</p>
            </div>
          )
        }

        {
          renderForm
        }

      </div>
    );
  }
}


StepOne.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  item: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

StepOne.defaultProps = {
  disabled: false
};