import React from 'react';
import {useRouter} from 'next/router'

const BlogPage = () => {

    const router = useRouter();

    console.log(router.query)
return (<div>BlogPage</div>);
}

export default BlogPage;