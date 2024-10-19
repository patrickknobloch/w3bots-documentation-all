import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof DocBreadcrumbsType>;

export default function DocBreadcrumbsWrapper(props: Props): JSX.Element {
  const { pathname } = useLocation();

  // Extrahiere den aktuellen Seitennamen aus dem Pfad
  const currentPageName = pathname.split('/').pop() || 'Home'; // Standardwert, falls kein Name gefunden wird

  return (
    <div className='mb-6'>
      <a href="/">Start</a>
      <span style={{ margin: '0 8px' }}>→</span> {/* Arrow */}
      <span>{currentPageName}</span> {/* Aktueller Seitennamen */}
    </div>
  );
}
