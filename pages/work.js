import Head from 'next/head'
import Work from '../Components/Work';
import HeadTag from '../Components/HeadTag';

const work = ({ currentTheme }) => {
    return (
        <>
            <HeadTag />
            <div>
                <Work currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default work
