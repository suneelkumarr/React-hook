import React, {useReducer, useEffect} from 'react'
import UserBar from './users/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import appReducer from './redux/reducers'

const defaultPosts  = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Suneel Kumar' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Suneel Kumar' }
]


function App() {
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  useEffect(() => { 
    if(user){
      document.title = `${user} - React Hooks Blog`
    }else{
      document.title = 'React Hooks Blog'
    }
  }, [user])
  return (
    <div style={{ padding: 8 }}>
            <UserBar user={user} dispatch={dispatch} />
            <br />
            {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
            <br />
            <hr />
            <PostList posts={posts} />
        </div>
  );
}

 export default App;
