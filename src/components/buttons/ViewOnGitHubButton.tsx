import React, {FC} from 'react';
import Link from '@docusaurus/Link';

interface ViewOnGitHubButtonProps {
  additionalClassNames: string;
}

const ViewOnGitHubButton: FC<ViewOnGitHubButtonProps> = ({additionalClassNames}) => (
  <Link
    className={`button button--accent ${additionalClassNames}`}
    to="https://github.com/bitbomdev/minefield">
    View on GitHub
  </Link>
);

export default ViewOnGitHubButton;
