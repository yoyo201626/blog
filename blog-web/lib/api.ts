import useSWR, { SWRResponse } from 'swr'
import { ResItem, ResPage } from '../types/res'
import { Cate } from '../types/cate'
import { PostPageQuery, PostPage } from '../types/post'
// const base = 'http://127.0.0.1:8085'
const base = 'http://blog:8085'
/**
 * 获取全局信息
 * @returns 
 */
export function getInfo(): Promise<ResItem<PostPage>> {
  return fetch(base+`/api/global/get`).then(res => res.json())
}

/**
 * 获取所有文章分类
 * @returns 
 */
export function getAllCate() : SWRResponse<ResPage<Cate>, Error> {
  return useSWR(base+'/api/cate/all', (...args) => fetch(...args).then(res => res.json()))
}

/**
 * 分页获取文章
 * @returns 
 */
 export function getPagePost(query: PostPageQuery) : Promise<ResItem<PostPage>>{
    const parma = `pi=${query.pi}&ps=${query.ps}${query.cate_id ? '$cate_id='+query.cate_id: ''}`
    return fetch(base+'/api/post/page?'+parma).then(res => res.json())
}

/**
 * 获取具体文章
 * @returns 
 */
export function getPost(id: number) : Promise<ResItem<PostPage>> {
  // return useSWR(`/api/post/get?id=${id}`, (...args) => fetch(...args).then(res => res.json()))
  return fetch(base+`/api/post/get?id=${id}`).then(res => res.json())
}
/**
 * 分页获取特殊文章，包括about，link等
 * @returns 
 */
 export function getExPagePost(query: PostPageQuery) : SWRResponse<ResPage<PostPage>, Error> {
  const parma = `pi=${query.pi}&ps=${query.ps}${query.cate_id ? '$cate_id='+query.cate_id: ''}`
  return useSWR(base+'/api/page/page?'+parma, (...args) => fetch(...args).then(res => res.json()))
}


/**
 * 获取全局信息
 * @returns 
 */
 export function getAllPath(): Promise<ResPage<PostPage>> {
  return fetch(base+`/api/post/postall`).then(res => res.json())
}
