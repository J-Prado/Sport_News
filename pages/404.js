import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function NotFound() {
  return (
    <Layout title="Page Not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, Nothing is Here</h4>
        <Link href="/">Go back Home</Link>
      </div>
    </Layout>
  );
}
