import TopTenList from "./toptenlist";

export default function TopTen({ timeRange, type }) {
  return (
    <div className="">
      <TopTenList type={type} timeRange={timeRange} />
    </div>
  );
}
