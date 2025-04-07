import { Fragment, memo } from 'react';

const MainComponent = () => {
  const makeLog = () => console.log('Hi from MainComponent');

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// Memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>Say Hi from ChildComponent</button>
));
