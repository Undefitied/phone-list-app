import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'

import PhoneDetails from './PhoneDetails'

const PhoneListItem = ({ item }) => {

  return (
    <div className="phone-list-item">
      <Grid container spacing={16} style={{position: 'relative'}}>
        <Link
          to={`/${item.id}`}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 3 }}
        />

        <Grid item xs={3} style={{ textAlign: 'center' }} className="phone-list-item-image">
          <img src={item.image} alt={item.title} style={{ height: 150 }}/>
        </Grid>

        <Grid item xs={9}>
          <PhoneDetails phone={item} />
        </Grid>
      </Grid>
    </div>
  )
}

export default PhoneListItem
