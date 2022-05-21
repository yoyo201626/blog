import Layout from '../components/Layout/layout'
import Head from 'next/head'
import { getInfo } from '../lib/api'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Info } from '../types/info'

const About = (info: Info) => {
  return( 
    <Layout>
      <Head>
        <title>
          {info.title}
        </title>
      </Head>
      <div className="brief">
        <div className="top"> 
          {/* <h1 className="h1-c">{info.author}</h1> */}
          <h2 className="h2-c">{info.author}</h2>
        </div>

        <div className="middle">
          <div className="profile">
            {/* <h2 className="h2-c">Hello.</h2> */}
            <p className ="intro">{info.comment}</p>
          </div>
          {/* <div className="skills">
            <h2 className="h2-c">My Skills.</h2>
            <div className="skill-row">
              <h3 className="h3-c">Design and Development</h3>
              <p>I've been coding since I was ten and in my short time as a beginner programmer, I have built mini projects,scripts and games using languages such as HTML, CSS, Processing and Java</p>
            </div>
            <div className="skill-row">
              <h3 className="h3-c">Information Technology</h3>
              <p>I provide advice and technology tips to individuals to make their computer workflow faster</p>
            </div>
          </div>
          <div className="contact-me">
            <h2 className="h2-c">Get In Touch</h2>
            <h3 className="h3-c">I am currently free for freelance work.</h3>
            <p className="contact-message">If you need help with any programming or web based project, don't hesitate to send me a message.</p>
            <a className="btn" href="mailto:name@email.com">CONTACT ME</a>
          </div> */}
        </div>
        <div className="bottom">
          <a className="footer-link" href="">Twitter</a>
          <a className="footer-link" href="">Website</a>
          <p className="copyright">{info.copyright} {info.beian_miit}</p>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getInfo()
  const data = res.data as Info
  return { props: data  }
}
