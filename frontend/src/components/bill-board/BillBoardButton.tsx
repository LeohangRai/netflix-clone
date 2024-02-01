import { PlayIcon } from '@heroicons/react/outline';

interface BillBoardButtonProps {
  readonly text: string;
  readonly theme: 'light' | 'dark';
}

export default function BillBoardButton({ text, theme }: BillBoardButtonProps) {
  const darkThemeBtnProperties =
    theme === 'dark' ? 'bg-opacity-30 text-white' : null;
  const darkThemeIconProperties = theme === 'dark' ? 'text-white' : null;
  return (
    <button
      className={`w-auto flex items-center py-2 px-4 bg-white ${darkThemeBtnProperties} rounded-md text-lg font-semibold hover:bg-neutral-400 transition`}
    >
      <PlayIcon className={`w-7 mr-1 ${darkThemeIconProperties}`} />
      <p className={`${darkThemeIconProperties}`}>{text}</p>
    </button>
  );
}
