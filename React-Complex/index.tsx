import { Loading, Badge } from '@components';

import { Profile } from './profile';

export const App = () => {
  return (
    <Profile username="john_doe">
      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
    </Profile>
  );
};
