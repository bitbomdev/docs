import React, {FC} from 'react';
import Link from '@docusaurus/Link';

interface SignupForWaitlistButtonProps {
  additionalClassNames: string;
}

const SignupForWaitlistButton: FC<SignupForWaitlistButtonProps> = ({
  additionalClassNames,
}) => (
  <Link
    className={`button button--outline ${additionalClassNames}`}
    to="/demos/starting-up-minefield/">
    Get Started
  </Link>
);

export default SignupForWaitlistButton;
