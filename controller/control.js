const request = require('request');
const bodyParser = require('body-parser');

let movieInfo = [];



exports.getIndexPage = (req,res,next) => {
    res.render('index',{title:'Movie Search'});
};




exports.pageNotFound = (req,res,next)=>{
    res.send('<h1>page Not Found</h1>');
};




exports.search = (req,res,next) =>
{
    movieTitle = req.query.movieTitle;
    let check = movieTitle.length;

    if(check>0)
    {

        url = "http://www.omdbapi.com/?apikey=fd8aed99&t=" + movieTitle;


         request(url, (error, response,body) =>
        {

            if(!error && response.statusCode == 200)
            {
                
                let results = JSON.parse(body);
            

                movieInfo.push(
                    {title:results.Title,
                    year:results.Year,
                    released:results.Released,
                    runtime:results.Runtime,
                    genre: results.Genre,
                    director:results.Director,
                    write:results.Writer,
                    actors:results.Actors,
                    language:results.Language,
                    country:results.Country,
                    poster:results.Poster,
                    boxOffice:results.BoxOffice,
                    poster:results.Poster
                    }); // end push
                
             }; // end if

            res.redirect('/results');

         }); // end request

    } // end if

        else
        {
            movieInfo = [];
        }   
               
}; // end export 



exports.getResults = (req,res,next) =>{
   
    res.render('results',{title:'Results',movieInfo:movieInfo});
    movieInfo = [];
    
    
};