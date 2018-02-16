import React from "react"
import Link from "gatsby-link"

import {
  TrekIcon,
  ExpeditionIcon,
  ReviewsIcon,
  BlogIcon,
} from "../images/mobile-nav-icons"
import presets, { colors } from "../utils/presets"

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link
    to={linkTo}
    style={{
      color: colors.mountain6,
      letterSpacing: `0.0075rem`,
      lineHeight: 1,
      padding: `8px 8px`,
      textDecoration: `none`,
      textAlign: `center`,
    }}
  >
    <img src={icon} css={{ height: 32, display: `block`, margin: `0 auto` }} />
    <div>{label}</div>
  </Link>
)

export default () => (
  <div
    css={{
      position: `fixed`,
      display: `flex`,
      justifyContent: `space-around`,
      alignItems: `center`,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      borderTop: `1px solid ${colors.ui.light}`,
      background: colors.ui.whisper,
      [presets.Tablet]: {
        display: `none`,
      },
    }}
  >
    <MobileNavItem linkTo="/trek/" label="Treks" icon={TrekIcon} />
    <MobileNavItem linkTo="/expedition/" label="Expeditions" icon={ExpeditionIcon} />
    <MobileNavItem
      linkTo="/reviews/"
      label="Reviews"
      icon={ReviewsIcon}
    />
    <MobileNavItem linkTo="/blog/" label="Blog" icon={BlogIcon} />
  </div>
)

