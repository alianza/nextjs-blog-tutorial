import Link from 'next/link'
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import { getFirstPostData } from "../../lib/posts";

export async function getStaticProps() {
    const firstPostData = getFirstPostData()
    return {
        props: {
            firstPostData
        }
    }
}

export default function FirstPost({ firstPostData }) {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                        <li className={utilStyles.listItem} key={firstPostData.id}>
                            <Link href={`/posts/${firstPostData.id}`}>
                                <a>{firstPostData.title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={firstPostData.date} />
                            </small>
                        </li>
                </ul>
            </section>
        </Layout>
    )
}
