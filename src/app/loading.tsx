export default function Loading() {
    return(
    <div className="flex items-center justify-center text-4xl text-center min-h-screen">
   
      <h1> Loading...</h1>
      <div className="width:100%;height:0;padding-bottom:73%;position:relative;">
        <iframe
          src="https://giphy.com/embed/3y0oCOkdKKRi0"
          width="100%"
          height="100%"
          className="position:absolute"
          frameBorder="0"
          allowFullScreen
          title="Loading animation"
        ></iframe>
      </div>
     
     </div>
        
    )
        
    
}
