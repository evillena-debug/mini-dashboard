import React from 'react'
import Color from 'color'
import styled from 'styled-components'
import { DialogDisclosure, useDialogState } from 'reakit/Dialog'

import {
  MeilisearchLogo,
  GithubLogo,
  InterrogationMark,
} from 'components/icons'
import Card from 'components/Card'
import IconButton from 'components/IconButton'
import Link from 'components/Link'
import Modal from 'components/Modal'
import Typography from 'components/Typography'

const StyledCard = styled(Card)`
  padding: 20px 12px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
  border-radius: 20px;
  box-shadow: none;
  transition: box-shadow 300ms;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 30px ${(p) => Color(p.theme.colors.gray[0]).alpha(0.1)};
  }
`

const Logo = styled.div`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HelpCard = ({ description, title, logo, href, ...props }) => (
  <StyledLink href={href} style={{ textDecoration: 'none' }} {...props}>
    <StyledCard forwardedAs="div">
      <Logo>{logo}</Logo>
      <Typography variant="typo4" color="gray.0" my={1}>
        {title}
      </Typography>
      <Typography
        variant="typo3"
        color="gray.8"
        style={{ textAlign: 'center', fontWeight: 400 }}
      >
        {description}
      </Typography>
    </StyledCard>
  </StyledLink>
)

const CardsContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > a + a {
    margin-left: 20px;
  }
`

const HelpCenter = () => {
  const dialog = useDialogState()
  return (
    <>
      <DialogDisclosure {...dialog}>
        {(props) => (
          <IconButton
            color="main.default"
            variant="bordered"
            aria-label="help"
            style={{ width: 26, height: 26 }}
            {...props}
          >
            <InterrogationMark style={{ height: 14 }} />
          </IconButton>
        )}
      </DialogDisclosure>
      <Modal
        title="Centro de Ayuda"
        dialog={dialog}
        ariaLabel="Centro de Ayuda"
        style={{ paddingBottom: 56 }}
      >
        <CardsContainer>
          <HelpCard
            logo={<GithubLogo style={{ width: 62 }} />}
            title="Github"
            description="Explora nuestros repositorios en Github"
            href="https://github.com/evillena-debug"
          />
          <HelpCard
            logo={<MeilisearchLogo style={{ width: 62 }} />}
            title="Contacto"
            description="Centro de ayuda"
            href="https://www.villalba.cl/contacto/"
          />
        </CardsContainer>
      </Modal>
    </>
  )
}

export default HelpCenter
