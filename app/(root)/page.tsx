import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex bg-amber-50 h-screen items-center justify-center ">
      <h1 className="text-3xl text-brand">
        StoreIt - The only storage solution you need.
      </h1>
    </div>
  );
}
