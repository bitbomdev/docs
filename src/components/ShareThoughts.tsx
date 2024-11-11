import React from 'react';
import Link from '@docusaurus/Link';

export default function ShareThoughts({
  title,
  type,
}: {
  title: string;
  type: 'Blog' | 'Documentation' | 'Demo' | 'Glossary';
}): JSX.Element {
  const issueTitle = encodeURIComponent(`${type} Feedback: ${title}`);
  const issueBody = encodeURIComponent(`Feedback for ${type.toLowerCase()}: **${title}**`);
  const issueUrl = `https://github.com/bitbomdev/docs/issues/new?title=${issueTitle}&body=${issueBody}`;

  return (
    <div className="card margin-top--lg">
      <div className="card__body">
        <h3>Share Your Thoughts</h3>
        <p>Have thoughts or comments about this {type.toLowerCase()}? Start a discussion on GitHub!</p>
        <Link
          className="button button--primary"
          to={issueUrl}
          target="_blank"
          rel="noopener noreferrer">
          Create GitHub Issue
        </Link>
      </div>
    </div>
  );
} 