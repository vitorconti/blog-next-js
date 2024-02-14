import { Fragment } from "react"
import Hero from "../components/home-page/Hero"
import FeaturedPosts from "../components/home-page/FeaturedPosts"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

function HomePage ({posts}){
    return <Fragment>
        <Head>
            <title>Conti's Blog</title>
            <meta name="description" content="posts about web development"/>
        </Head>
        <Hero/>
        <FeaturedPosts posts={posts}/>
    </Fragment>
}

export function getStaticProps () {
    const featuredPosts = getFeaturedPosts()
    return{
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage