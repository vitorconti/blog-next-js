import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

function PostItem({post}) {
    const {title,image,excerpt,date,slug} = post
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year:'numeric'
    })
    console.log(post)

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
    console.log(imagePath)
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={`related image for the post: ${title}`} width ={300} height={200}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}
export default PostItem