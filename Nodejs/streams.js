//test-file.txt : very long file that is heave

//How to read very long file using the usual way and streams?
//Streams are the simple way say when you watch You Tube and the video 
//  upload to you chunk by chunck. Notice the loading-bar

const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
    //solution 1
    // fs.readFile('./test-file.txt', (err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     res.end(data)
    // })

    //solution 2 using streams
    // const readable = fs.createReadStream('./test-file.txt')
    // readable.on('data', chunck => {
    //     res.write(chunck)
    // })

    // readable.on('end', ()=>{
    //     res.end()
    // })

    //solution3 using pipe
    const readable = fs.createReadStream('./test-file.txt')
    readable.pipe(res)
    //readableSource.pipe(writableDestination)
})

//Note: data,end are event listeners sets by Node community. the callback in data accept the {chunck} of the file or the video
//the listen event of end must be in the code

server.listen(8000, 'localhost', ()=>{
    console.log('listening ...')
})
