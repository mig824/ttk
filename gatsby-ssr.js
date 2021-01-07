const React = require('react');

exports.onRenderBody = ({ setHeadComponents }, options) => {
  if (options.linkStyles === false) return false;

  const link = React.createElement(`link`, {
    key: `leaflet`,
    rel: `stylesheet`,
    href: `https://unpkg.com/leaflet@1.7.1/dist/leaflet.css`,
    integrity: `sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==`,
    crossOrigin: ``,
  });

  setHeadComponents([link]);
};
