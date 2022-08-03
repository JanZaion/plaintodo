import Item from '../src/Item';
import Add from '../src/Add';
import styles from '../styles/Home.module.scss';

const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      <Add />
      <Item />
    </div>
  );
};

export default AppContainer;
