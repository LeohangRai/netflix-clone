import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function WatchPage() {
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full flex items-center gap-8 p-4 z-10 bg-black bg-opacity-80">
        <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 hover:opacity-80 transition" />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching:</span> Rick & Morty
        </p>
      </nav>
      <iframe
        className="h-full w-full"
        width="1895"
        height="712"
        src="https://www.youtube.com/embed/I1Q4FQNSb5c?autoplay=1"
        title="Rick & Morty"
        style={{ border: 0 }}
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
}
