import React from 'react';
import { useLocation } from '@docusaurus/router';
import { Breadcrumbs } from '@docusaurus/theme-common';
import HomeIcon from '@site/static/icons/home.svg'; // Stelle sicher, dass du den richtigen Pfad zu deinem Icon angibst

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = [
    {
      label: 'Home',
      to: '/',
      icon: <img src={HomeIcon} alt="Home" style={{ width: '1em', height: '1em', marginRight: '0.5em' }} />,
    },
    // Füge hier weitere Breadcrumbs hinzu, falls nötig
  ];

  return (
    <Breadcrumbs aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index}>
          <a href={breadcrumb.to}>
            {breadcrumb.icon}
            {breadcrumb.label}
          </a>
        </li>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;