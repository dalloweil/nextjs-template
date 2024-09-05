import Image from "next/image";
import NextJs from "../../app/assets/next-js.svg";
import Typescript from "../../app/assets/ts.svg";
import Jest from "../../app/assets/jest.svg";
import Eslint from "../../app/assets/eslint.svg"
import Prettier from "../../app/assets/prettier.png";
import AWS from "../../app/assets/aws.svg";
import styles from "./grid.module.css";

export default function Grid() {
  return (
    <ul className={styles.grid}>
      <li className={styles.block}><Image src={NextJs} alt="NextJs Logo" width={120} height={60} /></li>
      <li className={styles.block}><Image src={Typescript} alt="Typescript Logo" width={120} height={60} /></li>
      <li className={styles.block}><Image src={Jest} alt="Jest Logo" width={120} height={60} /></li>
      <li className={styles.block}><Image src={Eslint} alt="Eslint Logo" width={120} height={60} /></li>
      <li className={styles.block}><Image src={Prettier} alt="Prettier Logo" width={60} height={60} /></li>
      <li className={styles.block}><Image src={AWS} alt="AWS Logo" width={120} height={60} /></li>
    </ul>
  )
}
