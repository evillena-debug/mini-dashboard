import React from 'react'
import EmptyView from 'components/EmptyView'
import Typography from 'components/Typography'

const NoResultForRequest = () => (
  <EmptyView buttonLink="https://www.villalba.cl/contacto/">
    <Typography
      variant="typo8"
      style={{ textAlign: 'center' }}
      mb={16}
      color="gray.0"
    >
      Lo siento, no hay resultados que coincidan con su solicitud
    </Typography>
    <Typography variant="typo8" style={{ textAlign: 'center' }} mb={56}>
      <span role="img" aria-label="sad">
        ☹️
      </span>
    </Typography>
  </EmptyView>
)

export default NoResultForRequest
