import TopTenList from "./toptenlist";

export default function TopTen({ timeRange, type }) {
  return (
    <div className="w-[340px] border-2 border-black m-auto p-4">
      <TopTenList type={type} timeRange={timeRange} />
    </div>
  );
}
