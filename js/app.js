// this code from (https://medium.com/@gwilakers/structuring-your-node-js-app-67d20c2ab8a3) ,
        // var express = require(‘express’);
        // var app = express();
        // var port = process.env.PORT || 3000;
        // var database = require(‘./config/database’);
        // require(‘./api/routes.js’)(app);
        // app.use(function (error, request, response, next) {
        // console.error(error.stack);
        // response.status(400).send(error.message);
        // });
        // app.listen(port, function() {
        // console.log(“Node app is running at localhost:” + port);
        // });
// End here medium . 
// ********************************************************************************************************
// from here will start coding from course 
    // Genaral Notes for Nodjs IN (EVENT LOOP )
            // 1- nodejs uses such an event driven approach for all kinds of stuff, not just for managing
            //    that server but that is of course a crucial part
            // 2- to insert some data request and then we register some function that should be executed 
            //    once it's done. And nodejs uses this pattern because it actually executes single threaded javascript. So the
            //    entire node process basically uses one thread on our computer it's running on.





             // This is an event driven architecture (if X haapend Do Y )
                // jib.createServer(function(erq, res)
                //     {
                        
                //     })
                // End of event driven architecture


                // with this reqListener and execute it for every incoming request 

                    // function reqListener(req, res)
                    //         { 

                    //         }
                    // jib.createServer(reqListener);

// ********************************************************************************************************
// basically the equivalent to the function keyword approach we will work wtih 

    const jib = require('http')
    const server = jib.createServer((req, res) =>
        {
            console.log(req);
            // process.exit();


        });
    server.listen(3000);







