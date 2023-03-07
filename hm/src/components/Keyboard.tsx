import styles from '../css/Keyboard.module.css';

const KEYS: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem'
      }}
    >
      {KEYS.map(key => (
        <button
          key={key}
          onClick={() => addGuessedLetter(key)}
          className={`${styles.btn}`}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default Keyboard;
