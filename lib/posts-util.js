import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'posts')

function getPostsFiles(){
    return fs.readdirSync(postsDirectory)
}

function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/,'');
    const filePath = path.join(postsDirectory,`${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContent)
    

    return {
        slug: postSlug,
        ...data,
        content
    }
}

function getAllPosts(){
    const postFiles = getPostsFiles()
    const allPosts = postFiles.map(postFile => getPostData(postFile))
    const sortedPosts = allPosts.sort((postA,postB) => postA.date > postB.date ? -1 : 1)
    return sortedPosts
}

function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}
export {
    getAllPosts,
    getFeaturedPosts,
    getPostData,
    getPostsFiles
}