import RickAndMorty from '../../assets/rick-and-morty.mp4';
import BillBoardButton from './BillBoardButton';

export default function BillBoard() {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover brightness-[60%] transition duraton-500"
        autoPlay
        muted
        loop
        src={RickAndMorty}
      ></video>
      <div className="absolute top-[40%] ml-16">
        <p className="text-white mt-8 mb-5 drop-shadow-xl text-7xl">
          Rick & Morty
        </p>
        <div className="flex items-center gap-3 mt-4">
          <BillBoardButton text="Play" theme="light" />
          <BillBoardButton text="More Info" theme="dark" />
        </div>
      </div>
    </div>
  );
}
