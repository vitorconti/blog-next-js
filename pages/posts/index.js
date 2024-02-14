import { Fragment } from "react"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

function AllPostsPage ({posts}){
    return <Fragment>   <Head>
    <title>Conti's Blog</title>
    <meta name="description" content="a list of all posts"/>
    <AllPosts posts={posts}/>
</Head></Fragment> 
}

export function getStaticProps (){
    const allPosts = getAllPosts()
    return {
        props:{
            posts : allPosts
        }
    }
}

export default AllPostsPage