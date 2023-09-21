import styles from "./gramatyka.module.css";
import Link from "next/link";
const Grammar = () => {
  const grammarLevels = ["A1", "A2", "B1", "B2"];
  return (
    <article className={styles.levelsContainer}>
      {grammarLevels.map((level) => {
        return (
          <Link href={`/gramatyka/${level}`} key={level}>
            {level}
          </Link>
        );
      })}
    </article>
  );
};

export default Grammar;
