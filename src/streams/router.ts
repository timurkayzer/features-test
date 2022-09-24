import e, { Router } from "express";
import * as fs from 'fs';
import * as path from 'path';
import { Stream } from 'node:stream';

const streamsRouter = Router();

streamsRouter.get('/streams/test-file', async (req, res) => {
    let str = "";
    const readable = fs.createReadStream(path.resolve('./src/streams/testfile.txt'), { encoding: 'utf8' });
    for await (const chunk of readable) {
        console.log(chunk);
        str += chunk;
    }

    res.write(str);
    res.end();
});


export { streamsRouter };