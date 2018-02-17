import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import MobileNavigation from '../components/navigation-mobile';
import Navigation from '../components/navigation';
import presets from "../utils/presets"


export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isHomepage = this.props.location.pathname == `/`

    return (
      <div>
        <Helmet defaultTitle={`Mountain Advice`} titleTemplate={`%s | Mountain Advice`}>
          <meta name="twitter:site" content="@RajeshT59035636" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Mountain Advice" />
          <html lang="en" />
        </Helmet>
        <Navigation pathname={this.props.location.pathname} />
        <div css={{
            paddingTop: 0,
            [presets.Tablet]: {
              margin: `0 auto`,
              paddingTop: isHomepage ? 0 : presets.headerHeight,
            },
            }}
        >
        {this.props.children()}
        </div>
        <MobileNavigation />
      </div>
    );
  }
}
