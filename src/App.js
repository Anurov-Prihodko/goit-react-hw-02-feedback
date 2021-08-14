import FriendList from './components/FriendList';
import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transaction-history/transactions.json';
import statistics from './statistics/statistical-data.json';
import friends from './friend-list/friends.json';
import user from './social-profile/user.json';
// import Container from './components/block/Container'

function App() {
  return (
    <div>
      <h2>Задание 1 - Профиль социальной сети</h2>
      <SocialProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <hr />
      <h2>Задание 2 - Секция статистики</h2>
      <Statistics title="Upload stats" stats={statistics} />
      <hr />
      <h2>Задание 3 - Список друзей</h2>
      <FriendList friends={friends} />
      <hr />
      <h2>Задание 4 - История транзакций</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
