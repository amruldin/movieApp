const request = require('request');
const bodyParser = require('body-parser');

let movieInfo = [];
exports.getIndexPage = (req,res,next) => {
    res.render('index',{title:'Test title'});
};





exports.pageNotFound = (req,res,next)=>{
    res.send('<h1>page Not Found</h1>');
};


exports.getResults = (req,res,next) =>{
    let movieTitle = req.query.movieTitle;
    let url = "http://www.omdbapi.com/?apikey=fd8aed99&t=" + movieTitle;
    console.log(movieTitle);

    request(url, (error, response,body) =>{
        if(!error && response.statusCode == 200){
            
            let results = JSON.parse(body);
            let type = typeof(results);
            movieInfo.push(
                
                {title:results.Title},
                {year:results.Year},
                {released:results.Released},
                {runtime:results.Runtime},
                {genre: results.Genre},
                {director:results.Director},
                {write:results.Writer},
                {actors:results.actors},
                {language:results.Language},
                {country:results.Country},
                {poster:results.Poster},
                {boxOffice:results.BoxOffice}
                );

            // res.send(movieInfo);
            res.render('results',{title:'Results',movieInfo:movieInfo});
            movieInfo = [];
            
        

        };

    });

};