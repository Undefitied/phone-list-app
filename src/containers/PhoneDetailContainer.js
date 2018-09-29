import React from 'react'
import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

import PhoneDetails from '../components/PhoneDetails'
import HomeButton from '../components/HomeButton'
import withPhones from '../hoc/withPhones'

const PhoneDetailContainer = ({ match: { params: { phoneId } }, phones }) => {
  const phone = phones.byId[phoneId]

  if (!phone) {
    return <Redirect to="/404" />
  }

  return (
    <Grid container spacing={40} data-cy="detail-container">
      <Grid item xs={12} sm={4}>
        <img
          data-cy="detail-img"
          src={phone.image}
          alt={phone.title}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <HomeButton />
        <PhoneDetails phone={phone} />
      </Grid>
    </Grid>
  )
}

export default withPhones(PhoneDetailContainer)
