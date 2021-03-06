import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import geocoder from '../../GoogleMap/helpers/geocoder';
import { api } from '../../../serverServices';
import { msgUI, checkFields, espProvincies, countries } from '../../../utils';
import { TextInput, SelectInput, ButtonInput } from '../../common';

export default class FormAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: { ...props.address },
      errors: [],
      loading: false
    };

    this.provincies = espProvincies.map(el => el.nm).sort();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onChange(path, value) {
    const { address } = this.state;

    _.set(address, path, value);

    this.setState({ address });
  }

  onSubmit() {
    const { address, loading } = this.state;
    const { index, user } = this.props;

    if (!loading) {
      this.setState({ loading: true, errors: [] });
      const country = _.get(address, 'country', '');

      const errors = [
        ...checkFields.isRequired(_.get(address, 'address', ''), 'address'),
        ...checkFields.isRequired(_.get(address, 'city', ''), 'city'),
        ...checkFields.isRequired(country, 'country'),
        ...checkFields.isRequired(_.get(address, 'codePostal', ''), 'codePostal')
      ];

      switch (country) {
        case 'España': {
          errors.push(...checkFields.isRequired(_.get(address, 'state', ''), 'state'));
          delete address.countryName;
          break;
        }
        case 'Otros': {
          errors.push(...checkFields.isRequired(_.get(address, 'countryName', ''), 'countryName'));

          delete address.state;
          break;
        }

        default: {
          delete address.countryName;
          delete address.state;
        }
      }

      if (errors.length > 0) {
        this.setState({ errors, loading: false });
        return;
      }

      const userProfile = _.get(user, 'profile', '');

      if (userProfile !== '') {
        if (!userProfile.address) userProfile.address = [];

        geocoder(address, (error, res) => {
          if (res) {
            address.position = res;
          }

          if (index === -1) {
            userProfile.address.push(address);
          } else {
            userProfile.address[index] = address;
          }

          api.users.updateById({ ...user, profile: userProfile }, () => {
            const { onChange, onUser } = this.props;
            this.setState({ loading: false });

            onChange();
            onUser.getUser();
          });
        });
      }
    }
  }


  render() {
    const { address, errors, loading } = this.state;

    const country = _.get(address, 'country', '');

    return (
      <div className="app-my_account-container form_address">
        <TextInput
          error={msgUI.get(errors, 'address')}
          hintLabel="Dirección"
          label="Dirección"
          maxWidth
          onChange={this.onChange}
          path="address"
          value={_.get(address, 'address', '')}
        />

        <SelectInput
          className="select_input"
          error={msgUI.get(errors, 'country')}
          items={countries}
          label="País"
          onChange={this.onChange}
          path="country"
          value={country}
        />

        {
          country === 'España' && (
            <SelectInput
              className="select_input"
              error={msgUI.get(errors, 'state')}
              items={this.provincies}
              label="Provincia"
              onChange={this.onChange}
              path="state"
              value={_.get(address, 'state', '')}
            />
          )
        }

        {
          country === 'Otros' && (
            <TextInput
              error={msgUI.get(errors, 'countryName')}
              hintLabel="Nombre del País"
              label="Nombre del País"
              onChange={this.onChange}
              path="countryName"
              value={_.get(address, 'countryName', '')}
            />
          )
        }

        <TextInput
          error={msgUI.get(errors, 'city')}
          hintLabel="Ciudad"
          label="CIUDAD"
          onChange={this.onChange}
          path="city"
          value={_.get(address, 'city', '')}
        />

        <TextInput
          error={msgUI.get(errors, 'codePostal')}
          hintLabel="Código Postal"
          label="Código Postal"
          onChange={this.onChange}
          path="codePostal"
          value={_.get(address, 'codePostal', '')}
        />

        <div className="btn_save">
          <ButtonInput
            label={loading ? 'GUARDANDO...' : 'CONFIRMAR'}
            onClick={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}


FormAddress.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  onUser: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired
};
