
import ReactPaginate from 'react-paginate';
import Layout from '../../components/Layout/layout'
import { getPagePost } from '../../lib/api'
import Head from 'next/head'
import { PostPage, PostPageQuery } from '../../types/post'
import Summary from '../../components/Summary/summary'
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { ResPage } from '../../types/res';
const itemsPerPage = 5 // 每页大小
const Index = ({ posts, currentPage, count} :{ posts: PostPage[], currentPage: number, count:number}) => {
  const router = useRouter()
  const pageCount = Math.ceil(count/itemsPerPage) // 有多少页
  const items: PostPage[] = posts || [] // 当前items
  const handlePageClick = (event: { selected: number }) => {
    router.push('?page=' + (event.selected + 1))
  }
  return (
    <>
      <Layout>
        <Head>
          <title>Blogs</title>
        </Head>
          <ReactPaginate
            className='react-paginate'
            breakLabel="..."
            disableInitialCallback={true}
            initialPage={currentPage - 1}
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="previous"
            renderOnZeroPageCount={(props) =>  null}
          />
          {
            items.length > 0 && items.map(blog => 
            <Summary
              key={blog.id}
              title={blog.title}
              summary={blog.summary}
              created={blog.created}
              id={blog.id}
              tags={blog.tags}
              cate={blog.cate}
            />)
          }
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentPage = Number(context.query?.page) || 1
  const query : PostPageQuery= {pi: currentPage, ps: itemsPerPage}
  const res = await getPagePost(query) as ResPage<PostPage>
  const data = res.data
  const posts = data.items
  const count = data.count
  return { props: {posts, currentPage, count} }
}



export default Index

