import React, { Fragment } from 'react'

export default ({ phone }) => (
  <Fragment>
    <div data-cy="phone-list-item-title">
      <h3>{phone.title}</h3>
    </div>
    <div data-cy="phone-list-item-description">
      <p>{phone.description}</p>
    </div>
    <div data-cy="phone-list-item-price">
      ${phone.price}
    </div>
  </Fragment>
)