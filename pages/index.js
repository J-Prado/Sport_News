import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index.js";
import NewsItem from "@/components/NewsItem";
import {data} from "./api/news/data.json"

export default function HomePage({ news }) {
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link href="/news">
            <a className="btn-secondary"> View All News</a>
          </Link>
        )}
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();
//   return {
//     props: { news: news.slice(0, 5) },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const articles = await fetch(`${API_URL}/api/news`);/* db query to get the list of articles or fetch from remote API*/

//   // generate a list of paths with route params
//   const paths = articles.map(article => ({ params: { articleId: article.id }}))

//   return {
//      paths,
//      fallback: false 
//      // fallback can be  true if you want to show a fallback version of page 
//      // and serve JSON for unknown articles
//   }

// }
 export async function getStaticProps({params,res}) {
  try {
  const result = await fetch(`${API_URL}/api/news`);
  const news = await result.json();
  return {
    props: { news: news.slice(0, 5) },
    revalidate: 10,
  };
} catch (error) {
  res.statusCode=404;
  return {
    
    props: {},
  }
}
}

