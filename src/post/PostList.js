import React,  { useContext } from 'react';
import { StateContext } from '../redux/contexts'
import Post from './Post'

export default function PostList() {
    const { state } = useContext(StateContext)
    const { posts } = state
  return (
    <div>
      {posts.map((p, i) => (
        <React.Fragment key={'post-' + i}>
          <Post {...p} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}
