import Head from "next/head";
import cn from "classnames";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React next zero to hero</title>
      </Head>

      <main>
        <li>
          <Link href='exercise1'>
            <a>exercise1</a>
          </Link>
        </li>
        <li>
          <Link href='exercise2'>
            <a>exercise2</a>
          </Link>
        </li>
      </main>

      <footer></footer>
    </div>
  );
}
