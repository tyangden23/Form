

export default function Notfound(){
    return(
        <div className='error-page'>
            <h1>404: page Not found</h1>
            <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
            <p>please check the URL or return to the homepage.</p>
            {/* <Link to='/'>Return to Home  </Link> */}
        </div>
    )
}