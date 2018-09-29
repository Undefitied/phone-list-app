import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export default () => (
  <Button
    component={Link}
    to="/"
    color="primary"
    data-cy="home-button"
  >
    Back Home
  </Button>
)
