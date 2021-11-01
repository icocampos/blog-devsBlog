import { graphql } from 'msw'
import { posts } from './data/posts'

export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation('Login', null),
  // Handles a "GetUserInfo" query
  graphql.query('GetAllPosts', (req, res, ctx) => {
    return res (
      ctx.data({
       posts
      })
    )
  }),
]
