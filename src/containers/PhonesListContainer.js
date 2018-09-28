import React from 'react'

import Grid from '@material-ui/core/Grid'

import withPhones from '../hoc/withPhones'
import PhoneListItem from '../components/PhoneListItem'

const PhonesListContainer = ({ phones }) => (
  <Grid container spacing={32}>

    {
      phones.allIds.map(id => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <PhoneListItem item={phones.byId[id]} />
        </Grid>
      ))
    }

  </Grid>
)

export default withPhones(PhonesListContainer)
