import React from 'react'

import Grid from '@material-ui/core/Grid';

import PhoneDetails from '../components/PhoneDetails'
import HomeButton from '../components/HomeButton'
import withPhones from '../hoc/withPhones'

const PhoneDetailContainer = ({ match: { params: { phoneId } }, phones }) => {
  const phone = phones.byId[phoneId]

  return (
    <Grid container spacing={40}>
      <Grid item xs={12} sm={4}>
        <img src={phone.image} alt={phone.title} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <HomeButton />
        <PhoneDetails phone={phone} />
      </Grid>
    </Grid>
  )
}

export default withPhones(PhoneDetailContainer)
