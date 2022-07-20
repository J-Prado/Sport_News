// import Head from "next/head";
// import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index.js";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/News.module.css";

export default function News({ news }) {
  return (
    <div>
      <Layout>
        <h1>News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link href="/">
          <a className={styles.back}>Go back</a>
        </Link>
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();
//   return {
//     props: { news },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  return {
    props: { news },
    revalidate: 1,
  };
}
