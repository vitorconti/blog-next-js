import Image from 'next/image'
import classes from './hero.module.css'

function Hero(){
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='https://media.licdn.com/dms/image/D4D03AQH7eXbpdhnauA/profile-displayphoto-shrink_200_200/0/1671206666179?e=2147483647&v=beta&t=4K-coJPLcGDeUCddefz_d8gBPNK1aTbJ5b7lD9V9uNg'
                    alt= 'an image showing the blogs owner'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Conti</h1>
            <p>I blog about JavaScript ant it's features.</p>
        </section>
    )
}

export default Hero