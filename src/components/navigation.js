import React from "react"
import Link from "gatsby-link"
import logo from "../mountain.svg"
import presets, { colors } from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"

const navItemStyles = {
  boxSizing: `border-box`,
  display: `inline-block`,
  color: `inherit`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  borderBottom: `none`,
  letterSpacing: `0.03em`,
  lineHeight: `calc(${presets.headerHeight} - 6px)`,
  padding: `6px 4px 0`,
  position: `relative`,
  top: 0,
  transition: `color .15s ease-out`,
  "&:hover": {
    opacity: 0.8,
  },
}
const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: `inline-block`,
      margin: 0,
    }}
  >
    <Link to={linkTo} css={navItemStyles}>
      {children}
    </Link>
  </li>
)

export default ({ pathname }) => {
  const isHomepage = pathname == `/`
  const isBlog = pathname == `/blog/`
  let styles = {}
  if (isHomepage) {
    styles.backgroundColor = `rgba(255,255,255,0)`
    styles.borderBottomColor = `transparent`
    styles[presets.Tablet] = {
      position: isHomepage || isBlog ? `absolute` : `fixed`,
    }
  } else if (isBlog) {
    styles.backgroundColor = `#fff`
    styles[presets.Tablet] = {
      borderBottomColor: `transparent`,
      position: isHomepage || isBlog ? `absolute` : `fixed`,
      backgroundColor: colors.ui.whisper,
    }
  }
  const gutters = isHomepage
    ? {
        paddingLeft: `32px`,
        paddingRight: `32px`,
        paddingTop: `32px`,
        [presets.Hd]: {
          paddingLeft: `64px`,
          paddingRight: `64px`,
        },
        [presets.VHd]: {
          paddingLeft: `64px`,
          paddingRight: `64px`,
        },
        [presets.VVHd]: {
          paddingLeft: `64px`,
          paddingRight: `64px`,
        },
      }
    : {}

  return (
    <div
      role="navigation"
      css={{
        borderBottom: `1px solid ${colors.ui.light}`,
        backgroundColor: `rgba(255,255,255,0.975)`,
        position: isHomepage ? `absolute` : false,
        height: presets.headerHeight,
        zIndex: `2`,
        left: 0,
        right: 0,
        [presets.Tablet]: {
          position: isHomepage || isBlog ? `absolute` : `fixed`,
        },
        ...styles,
      }}
    >
      <div
        css={{
          margin: `0 auto`,
          paddingLeft: `32px`,
          paddingRight: `64px`,
          ...gutters,
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <Link
          to="/"
          css={{
            alignItems: `center`,
            color: `inherit`,
            display: `flex`,
            textDecoration: `none`,
            marginRight: `32px`,
            borderBottom: `none`,
            display: isHomepage ? `none` : `flex`,
            }}
        >
          <img
            src={logo}
            css={{
              height: 28,
              width: `auto`,
              margin: 0,
            }}
            alt=""
          />
          <h3 css={{ margin : `auto`, paddingLeft: `16px`}}> Mountain Advice </h3>
        </Link>
        <ul
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `flex`,
              margin: 0,
              padding: `16px`,
              justifyContent: `flex-end`,
              listStyl: `none`,
              color: isHomepage ? colors.mountain2 : colors.mountain5,
              flexGrow: 1,
              overflowX: `auto`,
              maskImage: `linear-gradient(to right, transparent, white 1%, white 98%, transparent)`,
            },
          }}
        >
          <NavItem linkTo="/trek/">Treks</NavItem>
          <NavItem linkTo="/expedition/">Expeditions</NavItem>
          <NavItem linkTo="/reviews/">Reviews</NavItem>
          <NavItem linkTo="/blog/">Blog</NavItem>
        </ul>
      </div>
    </div>
  )
}
