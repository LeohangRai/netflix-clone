export default function MovieListLoadingCards() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div className="flex flex-wrap gap-2 justify-between">
        {new Array(12)
          .fill(null)
          .map((_, index) => index + 1)
          .map((num) => (
            <div
              className="relative group col-span h-[12vw] w-[24%] flex space-x-4 bg-gray-400 animate-pulse"
              key={num}
            ></div>
          ))}
      </div>
    </div>
  );
}
