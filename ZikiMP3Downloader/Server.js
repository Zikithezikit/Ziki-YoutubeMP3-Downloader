const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const fs = require('fs');

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});

app.get('/download', (req, res) => {
    const link = req.query.url;
    const format = req.query.format; // 'mp3' or 'mp4'
    
    // Choose the appropriate format based on user input
    const video = ytdl(link, { filter: format === 'mp3' ? 'audioonly' : 'video' });

    // Set the response content type based on the chosen format
    res.setHeader('Content-Type', format === 'mp3' ? 'audio/mpeg' : 'video/mp4');

    
    // Pipe the audio stream to the response
    video.pipe(res);
});