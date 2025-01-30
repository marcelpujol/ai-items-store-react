import StoreStatistics from "./components/storeStatistics/storeStatistics";

const App: React.FC = () => {
  return (
    <div>
      <StoreStatistics
        total_items={6}
        total_price={318540}
        max_price={300}
        min_price={10}
        avg_price={53.09}
      />
    </div>
  );
};
export default App;
