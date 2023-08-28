export default function Post() {
    return(
    <div className="post">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"></img>
        </div>
        <div className="texts">
        <h2>Full-house battery backup comming later this year</h2>
        <p className="info">
          <a className="author">Abdul Ahad Sheikh</a>
          <time>2023-01-03 16:45</time>
        </p>
        <p className="summary">This is the summary part of the Post. This need to be the summary and not just lines from the blog!.</p>
        </div>
    </div>
    );
}