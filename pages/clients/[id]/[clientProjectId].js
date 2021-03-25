import React from 'react';
import { useRouter } from 'next/router'

const SelectedProjectClientPage = () => {
    const router = useRouter()
    console.log(router.query);

    return (<div>SelectedProjectClientPage</div>);
}

export default SelectedProjectClientPage;