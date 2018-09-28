import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
  <div style={{
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <CircularProgress />
  </div>
)

export default Loader
