import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Title';
import styles from './styles.module.css';

export default function BlogPostItemHeaderTitle({
  className,
}: Props): JSX.Element {
  const blogPost = useBlogPost();
  
  // Add null check for blogPost
  if (!blogPost) {
    return null;
  }
  
  const {metadata, isBlogPostPage} = blogPost;
  const {title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  
  return (
    <TitleHeading className={clsx(styles.title, className)}>
      {title}
    </TitleHeading>
  );
}
