import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/Layout/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { PostPage } from '../../types/post'
import { getPost } from '../../lib/api'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'


const Post = ({ post }:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
            <article className="mb-32 markdown-body">
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


export const getServerSideProps: GetServerSideProps = async (context) => {
  const pid  = context.params?.pid
  const res = await getPost(Number(pid))
  const data = res.data as PostPage
  return { props: { post: data } }
}

