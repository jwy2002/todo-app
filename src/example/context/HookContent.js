import {createContext, useContext} from "react";

const AppContext = createContext();

const HookContent = () => {
    const user = {
        nickname: 'danuel',
        isAdmin: true
    }

    return (
        <AppContext.Provider value={user}>
            <div>
                <Posts />
            </div>
        </AppContext.Provider>
    )
}


const PostsContext = createContext();

const Posts = () => {
    const posts = [
        {
            title: 'useContext',
            content: 'useContentsssss'
        }
    ];

    return (
        <PostsContext.Provider value={posts}>
            <Children />
        </PostsContext.Provider>
    )
}

const Children = () => {
    
    const user = useContext(AppContext);
    const posts = useContext(PostsContext);

    let label = 'user';
    if( user.isAdmin ) {
        label = 'admin';
    }

    return (
        <div>
            <div>{label}</div>
            <div>{user.nickname}</div>
            <div>{posts.map((post, index) => (
                <div key={index}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}</div>
        </div>
    )
}

export default HookContent;