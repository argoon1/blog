import Link from "next/link";
import styles from "./level.module.css";
type Props = {
  params: {
    level: string;
  };
};
const topics = ["present simple", "present continous"];
const page = ({ params: { level } }: Props) => {
  function getPracticieLink(topic: string) {
    return `/gramatyka/A1/${topic
      .split("")
      .map((str) => (str === " " ? "-" : str))
      .join("")}`;
  }
  return (
    <div className={styles.topicsContainer}>
      {topics.map((topic) => (
        <section className={styles.topicContainer}>
          {topic}
          <div className={styles.topicLinksContainer}>
            <Link
              href={getPracticieLink(topic) + "-nauka"}
              className={styles.topicPractice}
            >
              Ucz się
            </Link>
            <Link
              href={getPracticieLink(topic) + "-cwiczenia"}
              className={styles.topicPractice}
            >
              Cwicz
            </Link>
          </div>
        </section>
      ))}
      {level}
    </div>
  );
};

export default page;
