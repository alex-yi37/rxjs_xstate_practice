import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import {
  VanillaCounter,
  RxJSCounter,
  XStateCounter,
} from "./components/counter";
import {
  VanillaApiValidatedInput,
  RxJSApiValidatedInput,
  XStateApiValidatedInput,
} from "./components/api-validated-input";
import { RxJSIncrementingCounter } from "./components/counter/RxJSCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className="ui-set"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minHeight: 400,
        }}
      >
        <VanillaCounter />
        <RxJSCounter />
        <RxJSIncrementingCounter />
        <XStateCounter />
      </div>
      <div className="ui-set">
        <VanillaApiValidatedInput />
        <RxJSApiValidatedInput />
        <XStateApiValidatedInput />
      </div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </main>
  );
}
