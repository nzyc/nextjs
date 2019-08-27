import Header from '../components/header';
export default ({children}) => {
    return (
        <>
            <Header/>
            <main className="App-main">
                {children}
            </main>
        </>
    )
}
