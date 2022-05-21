import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import Link from 'next/link'
import Author from '../../types/author'
import { Cate } from '../../types/cate'
import { Tag } from '../../types/tag'
import style from './summary.module.css'

type Props = {
  title: string
  summary: string
  id: number
  created: string
  tags: Tag[]   //标签
  cate: Cate //分类
}

const Summary = ({
  title,
  summary,
  created,
  id,
  tags,
  cate,
}: Props) => {
  return (
    <section className={style.setion}>
        <h3>
            <Link as={`/posts/${id}`} href="/posts/[slug]">
                <a className={"hover:underline " + style.title}>{title}</a>
            </Link>
            <span className={style.time}>
                <DateFormatter dateString={created} />
            </span>
            <Link as={`/static-posts/${id}`} href="/static-posts/[slug]">
                <a className={"hover:underline " + style.time}>more</a>
            </Link>
        </h3>
        <div className={style.summary}>
            <section dangerouslySetInnerHTML={{__html: summary || '暂无简介'}}></section>
        </div>
    </section>
  )
}

export default Summary
