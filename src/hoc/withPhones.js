import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPhones } from '../actions/phonesActions';
import Loader from '../components/Loader'
import { hasData } from '../utils/state';

export default WrappedComponent => {
  class WithPhones extends Component {
    componentDidMount() {
      const {
        dispatch,
        phones,
      } = this.props

      if (!hasData(phones)) {
        dispatch(getPhones())
      }
    }

    render() {
      const {
        phones: {
          isLoading,
          data: phones,
        },
        ...rest,
      } = this.props

      if (isLoading) {
        return <Loader />
      }

      return (
        <WrappedComponent phones={phones} {...rest} />
      )
    }
  }

  const mapStateToProps = ({ phones }) => ({ phones })

  return connect(mapStateToProps)(WithPhones)
}
