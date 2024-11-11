import styles from './styles.module.css';
import CustomGitHubButton from '@site/src/components/buttons/CustomGitHubButton';
import SignupForWaitlistButton from '@site/src/components/buttons/SignupForWaitlistButton';
import ViewOnGitHubButton from '@site/src/components/buttons/ViewOnGitHubButton';

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.center}>
          <CustomGitHubButton href="https://github.com/bitbomdev/minefield" />
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <div className={styles.center}>
          <SignupForWaitlistButton additionalClassNames={''} />
          &nbsp;&nbsp;
          <ViewOnGitHubButton additionalClassNames={''} />
        </div>
      </div>
    </>
  );
}

export default Index;
