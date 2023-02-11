const Shimmer = () => {
  return (
    <div className="flex" data-testid="shimmer">
      {Array(16)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-48 h-48 bg-gray-400/30 m-2 flex"></div>
        ))}
    </div>
  );
};
export default Shimmer;
