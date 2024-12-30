import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  glossary: [
    {
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'generated-index',
        title: 'Minefield Glossary',
        description:
          'Learn more about supply chain security terminology',
        slug: '/categories/glossary',
      },
      items: [
        'what-is-an-SBOM',
        'roaring-bitmaps',
      ], 
    },
  ],
};

export default sidebars;