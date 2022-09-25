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


streamsRouter.get('/streams/for-await', async (req, res) => {

    const successPromise = new Promise((resolve, reject) => {
        resolve("Успешное выполнение");
    });

    const failedPromise = new Promise((resolve, reject) => {
        reject("Ошибка");
    });

    const promises: Promise<any>[] = [successPromise, failedPromise, successPromise];

    try {
        for await (const chunk of promises) {
            console.log(chunk);
        }
    }
    catch (e) {
        console.error(e);
    }

    res.end();
});

streamsRouter.get('/streams/promise-lists', async (req, res) => {

    const successPromise = new Promise((resolve, reject) => {
        resolve("Успешное выполнение");
    });

    const failedPromise = new Promise((resolve, reject) => {
        reject("Ошибка");
    });

    try {
        // const promises = await Promise.all([successPromise, failedPromise, successPromise]);
        const promises = await Promise.allSettled([successPromise, failedPromise, successPromise]);


        for (const chunk of promises) {
            console.log(chunk);
        }

        const promise = await Promise.race([successPromise, failedPromise, successPromise]);
        console.log(promise);

    }
    catch (e) {
        console.error(e);
    }

    res.end();
});


export { streamsRouter };