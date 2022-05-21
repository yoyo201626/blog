import Author from './author'
import { Cate } from './cate'
import { Tag } from './tag'

// 文章分页
export type PostPage = {
  id: number, // 文章id
  cate_id: number, // 分类Id
  kind: 1 | 2, // 1-文章，2-页面 
  status: 1 | 2, // 1-草稿，2-已发布
  title: string, //标题
  path: string, //访问路径
  summary: string, //摘要
  markdown: string, //markdown内容
  richtext: string, //富文本内容
  allow: boolean, //允许评论
  created: string, //创建时间 DATETIME 2018-09-10T11:12:43+08:00
  updated: string, //修改时间 DATETIME
  tags: Tag[],   //标签
  cate: Cate, //分类
}

// 文章分页查询
export type PostPageQuery = {
  cate_id?: number, // 分类id
  pi: number, // 页码
  ps: number, // 页大小
}