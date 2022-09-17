import e, { Router } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { Stream } from 'node:stream';

const streamsRouter = Router();

streamsRouter.get('/streams/test-file', async (req, res) => {

    try {
        const readFileStream = new Stream.Readable(fs.createReadStream(path.resolve('./src/streams/testfile.txt')));
        readFileStream.pipe(res);

        // let result = "";

        // readFileStream.on('data', chunk => {
        //     console.log('Line has been read:', chunk);
        //     result += chunk;
        // }).pipe(res);
    }
    catch (e) {
        res.send(e?.toString());
    }


    res.end();
})


export { streamsRouter };