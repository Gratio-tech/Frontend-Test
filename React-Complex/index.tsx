import { Loading, Badge } from '@components';

import { Profile } from './profile';

export const App = () => {
  // Здесь реализуйте пример загрузки данных из слоя API
  // Пишите код с учётом известных вам best-practice на основе вашего предыдущего опыта работы с реальными приложениями
  return (
    <Profile username="john_doe">
      {(user) => (user === null ? <Loading /> : <Badge info={user} />)}
    </Profile>
  );
};
