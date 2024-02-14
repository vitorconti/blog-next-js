import { Fragment } from "react"
import PostContent from "../../components/posts/posts-detail/PostContent"
import { getPostData, getPostsFiles } from "../../lib/posts-util"

function PostDetailPage ({post}){

    return <Fragment> <title>Conti's Blog</title>
    <meta name={props.post.title} content={props.post.excerpt}/>
    <PostContent post={post} />
    </Fragment>
}

export function getStaticProps(context){
    const {params} = context
    const {slug} = params
    const post = getPostData(slug)

    return {
        props: {
            post
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/,''))

    return {
        paths: slugs.map(slug => ({params : {slug}})),
        fallback: false
    }
}

export default PostDetailPage