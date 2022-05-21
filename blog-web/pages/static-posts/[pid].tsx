import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/Layout/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { PostPage } from '../../types/post'
import { getAllPath, getPost } from '../../lib/api'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'


const Post = (post: PostPage) => {
  const router = useRouter()
  if (!router.isFallback && !post?.path) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>
              <PostBody content={post.richtext} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pid  = params?.pid
  const res = await getPost(Number(pid))
  const data = res.data as PostPage
  return { props: data }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllPath()
  const data = res.data as PostPage[]
  const paths = data.map(post => {
    return { params: { pid: String(post.id) }}
  })
  return {
    paths: paths,
    fallback: true,
  }
}


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const pid  = context.params?.pid
//   const res = await getPost(Number(pid))
//   const data = res.data as PostPage
//   return { props: { post: data } }
// }

