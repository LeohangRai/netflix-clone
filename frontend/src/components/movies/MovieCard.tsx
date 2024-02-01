import { ChevronDownIcon } from '@heroicons/react/outline';
import { PlayIcon } from '@heroicons/react/solid';
import BlackMirrorThumbnailImg from '../../assets/black-mirror.jpeg';

export default function MovieCard() {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] w-[24%]">
      <img
        src={BlackMirrorThumbnailImg}
        alt="Movie"
        draggable={false}
        className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-md
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-300
          w-full
          h-[12vw]
        "
      />
      <div
        className="
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-110
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
        "
      >
        <img
          src={BlackMirrorThumbnailImg}
          alt="Movie"
          draggable={false}
          className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
          "
        />
        <div
          className="
            z-10
            bg-zinc-800
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3">
            <button className="flex justify-center items-center w-6 h-6 lg:w-10 lg:h-10 cursor-pointer bg-white rounded-full  transition hover:bg-neutral-300">
              <PlayIcon className="text-black w-4 lg:w-6" />
            </button>
            <div className="flex justify-center items-center ml-auto cursor-pointer w-6 h-6 lg:w-10 lg:h-10 group/item  border-white border-2 rounded-full transition hover:border-neutral-300">
              <ChevronDownIcon className="w-4 lg:w-6 text-white group-hover/item:text-neutral-300" />
            </div>
          </div>
          <p className="mt-4 text-white font-semibold text-2xl">Black Mirror</p>
          <p className="text-gray-400">
            Twisted tales run wild in this mind-bending anthology series that
            reveals humanity's worst traits, greatest innovations and more.
          </p>
          <div className="flex flex-row items-center mt-4 gap-2 ">
            <p className="text-white text-[10px] lg:text-sm">7 hours</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>Dystopia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
