import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import ShareThoughts from '@site/src/components/ShareThoughts';

export default function DocItemFooter(): JSX.Element {
  const { metadata } = useDoc();
  const { title } = metadata;

  const activePlugin = useActivePlugin();
  const pluginId = activePlugin?.pluginId || 'default';

  const typeMap: { [key: string]: 'Documentation' | 'Demo' | 'Glossary' } = {
    'default': 'Documentation',
    'demos': 'Demo',
    'glossary': 'Glossary',
  };

  const type = typeMap[pluginId] || 'Documentation';

  return (
    <footer
      className={`row docusaurus-mt-lg ${ThemeClassNames.docs.docFooter}`}
    >
      <div className="col">
        <ShareThoughts title={title} type={type} />
      </div>
    </footer>
  );
}
