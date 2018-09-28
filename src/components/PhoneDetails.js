import React, { Fragment } from 'react'

export default ({ phone }) => (
  <Fragment>
    <div className="phone-list-item-title">
      <h3>{phone.title}</h3>
    </div>
    <div className="phone-list-item-description">
      <p>{phone.description}</p>
    </div>
    <div className="phone-list-item-price">
      ${phone.price}
    </div>
  </Fragment>
)