"use client";
import styles from "./topic.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
const grammar = {
  "present-simple": {
    nauka: {
      use: [
        {
          explanation: "Nawyki",
          examples: [
            {
              eng: "She drinks tea in the morning.",
              pl: "Ona pije herbatę rano.",
            },
            {
              eng: "He reads a book before bedtime.",
              pl: "On czyta książkę przed snem.",
            },
            {
              eng: "We go for a walk after dinner.",
              pl: "Idziemy na spacer po kolacji.",
            },
            {
              eng: "They watch TV on Sundays.",
              pl: "Oni oglądają telewizję w niedzielę.",
            },
            {
              eng: "I clean the house every Saturday.",
              pl: "Sprzątam dom w każdą sobotę.",
            },
          ],
        },
        {
          explanation: "Fakty,  stwierdzenia które zazwyczaj są prawdziwe.",
          examples: [
            {
              eng: "Lions eat meat.",
              pl: "Lwy jedzą mięso.",
            },
            {
              eng: "Water freezes at a low temperature.",
              pl: "Woda zamarza przy niskiej temperaturze.",
            },
            {
              eng: "Birds build nests.",
              pl: "Ptaki budują gniazda.",
            },
            {
              eng: "The sun rises in the east.",
              pl: "Słońce wschodzi na wschodzie.",
            },
            {
              eng: "Fish live in water.",
              pl: "Ryby żyją w wodzie.",
            },
          ],
        },
        {
          explanation:
            "Z czasownikami częstotliwości: always, usually, often, sometimes, rarely, never",
          examples: [
            {
              eng: "I wake up early every morning.",
              pl: "Codziennie rano wstaję wcześnie.",
            },
            {
              eng: "She goes to the gym after work usually.",
              pl: "Ona zazwyczaj idzie na siłownię po pracy.",
            },
            {
              eng: "They visit their grandparents often on weekends.",
              pl: "Często odwiedzają swoich dziadków w weekendy.",
            },
            {
              eng: "We sometimes have pizza for dinner.",
              pl: "Czasami jemy pizzę na obiad.",
            },
            {
              eng: "He rarely watches TV because he's always busy.",
              pl: "Rzadko ogląda telewizję, bo zawsze jest zajęty.",
            },
            {
              eng: "She never eats fast food.",
              pl: "Ona nigdy nie je fast foodu.",
            },
          ],
        },
      ],
      image: "optional",
    },
    cwiczenia: "cwiczob",
  },
};

const Topic = () => {
  const curPath = usePathname();
  const topicInfo = usePathname().split("/");
  const topicInfoDetails = topicInfo[topicInfo.length - 1].split("-");
  function getSecondTopicLink() {
    return showTopic == "cwiczenia" ? "nauka" : "cwiczenia";
  }

  const showTopic = topicInfoDetails.pop() as "cwiczenia" | "nauka";
  const grammarTopic = topicInfoDetails.join("-") as keyof typeof grammar;
  function getLink() {
    if (curPath.endsWith("nauka")) {
      return curPath.slice(0, -5) + "cwiczenia";
    } else if (curPath.endsWith("cwiczenia")) {
      return curPath.slice(0, -9) + "nauka";
    } else {
      return curPath;
    }
  }
  return (
    <main>
      <h1>{grammarTopic}</h1>
      <Link href={getLink()}>{getSecondTopicLink()}</Link>
      {showTopic === "nauka" ? (
        <ol className={styles.list}>
          {grammar[grammarTopic][showTopic]["use"].map(
            ({ explanation, examples }) => (
              <li className={styles.rule} key={explanation}>
                <h2 className={styles.expHeader}>{explanation}</h2>
                <ul className={styles.listInner}>
                  {examples.map(({ eng, pl }) => (
                    <li key={eng}>
                      {eng} ({pl})
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ol>
      ) : (
        "cwiczenia"
      )}
    </main>
  );
};

export default Topic;

/*
Fill the gap (just ending)   He work[] in a shop
Create sentence from scratch  He/ live / in / home

*/
