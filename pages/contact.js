import { Fragment } from "react"
import ContactForm from "../components/contact/ContactForm"
import Head from "next/head"

function Contact (){
    return <Fragment>
           <Head>
            <title>Contact</title>
            <meta name="description" content="send me some comments"/>
        </Head>
        <ContactForm/>
    </Fragment>
}

export default Contact