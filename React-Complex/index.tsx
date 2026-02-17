import { Loading, Badge } from '@components';

import { Profile } from './profile';

export const App = () => {
  // Возможно тут также следует учесть что-либо
  // Сделайте предположение на основе вашего опыта работы с реальными приложениями
  return (
    <Profile username="john_doe">
      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
    </Profile>
  );
};
