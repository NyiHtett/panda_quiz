import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="container">
        <h1> Panda Express Quizlet for Trainees </h1>
        <div>
        <div style={{marginTop: 100}}>
        <Link href="/guessItem">
        <button> Take Quiz to Guess Item Name</button>
        </Link>
        <Link href="/guessNumber">
        <button> Take Quiz to Guess Item Number</button>
        </Link>
        <Link href="/visualize">
        <button> Visualize Entrees</button>
        </Link>
        </div>
        </div>
        
      </div>
    </main>
  );
}
