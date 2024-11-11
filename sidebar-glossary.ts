import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  glossary: [
    {
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'generated-index',
        title: 'Kubernetes Glossary',
        description:
          'Learn about common Kubernetes and cloud-native terminology',
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