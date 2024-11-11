import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import EditMetaRow from '@theme/EditMetaRow';
import TagsListInline from '@theme/TagsListInline';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import Link from '@docusaurus/Link';
import ShareThoughts from '@site/src/components/ShareThoughts';

export default function BlogPostItemFooter(): JSX.Element | null {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {
    tags,
    title,
    editUrl,
    hasTruncateMarker,
    lastUpdatedBy,
    lastUpdatedAt,
  } = metadata;

  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;

  if (!renderFooter) {
    return null;
  }

  if (isBlogPostPage) {
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

    return (
      <footer className="docusaurus-mt-lg">
        {tagsExists && (
          <div
            className={clsx(
              'row',
              'margin-top--sm',
              ThemeClassNames.blog.blogFooterEditMetaRow,
            )}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(
              'margin-top--sm',
              ThemeClassNames.blog.blogFooterEditMetaRow,
            )}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
        <ShareThoughts type="Blog" title={title} />
      </footer>
    );
  }

  return (
    <footer className="row card__footer">
      {tagsExists && (
        <div className={clsx('col', {'col--9': truncatedPost})}>
          <TagsListInline tags={tags} />
        </div>
      )}
      {truncatedPost && (
        <div
          className={clsx('col text--right', {
            'col--3': tagsExists,
          })}>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
