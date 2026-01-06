import { cn } from "@/lib/utils";

const itemClasses =
  "h-[40px] lg:h-[64] px-8 flex flex-col cursor-pointer justify-center rounded-full hover:bg-gray-300";

const SearchFilters = () => {
  return (
    <div className="h-[40px] lg:h-[64] flex items-center border rounded-full px-2 bg-white">
      {/* MOBILE */}
      <div className="flex md:hidden items-center gap-2 px-4">
        <div className="p-2 bg-gray-700 rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            className="h-3 w-3 md:h-4 md:w-4" // mic pe mobil, mai mare pe desktop
            fill="none"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path d="m20.666 20.666 10 10" />
            <path d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z" />
          </svg>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center">
        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Where</p>
          <p className="text-sm">Wanted location</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Check in</p>
          <p className="text-sm">Add dates</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Check out</p>
          <p className="text-sm">Add dates</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Who</p>
          <p className="text-sm">Add guests</p>
        </div>

        <div className="p-2">
          <div className="p-4 cursor-pointer bg-gray-700 hover:bg-gray-500 transition rounded-full text-white">
            <svg
              viewBox="0 0 32 32"
              style={{
                display: "block",
                fill: "none",
                height: 12,
                width: 12,
                stroke: "currentColor",
                strokeWidth: 4,
              }}
            >
              <path d="m20.666 20.666 10 10" />
              <path d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
