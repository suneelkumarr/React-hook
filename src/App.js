import React, {useReducer, useEffect, useState} from 'react'
import UserBar from './users/UserBar'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import appReducer from './redux/reducers'
import Header from './Header/Header'
import  { ThemeContext,StateContext   }  from './redux/contexts'
import ChangeTheme from './ThemeColor/ChangeTheme'
const defaultPosts  = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Suneel Kumar' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Suneel Kumar' }
]


function App() {
  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
})
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user } = state

  useEffect(() => { 
    if(user){
      document.title = `${user} - React Hooks Blog`
    }else{
      document.title = 'React Hooks Blog'
    }
  }, [user])
  return (
    <StateContext.Provider value={{ state, dispatch }}>
    <ThemeContext.Provider value={theme}>
    <div style={{ padding: 8 }}>
        <Header text="React Hooks Blog" />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <br />
        <UserBar />
        <br />
        {user && <CreatePost />}
        <br />
        <hr />
        <PostList />
    </div>
</ThemeContext.Provider>
</StateContext.Provider>
  );
}

 export default App;
