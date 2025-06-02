const videos = [
    {
        vidId:'3xWlN71iqaA',
        uploadDate:'<span style=\'color:#ffffde;font-weight:bold;\'>19:05:45</span> on <a href=\'https://en.wikipedia.org/wiki/Portal:Current_events/2022_December_16\'>16 December 2022</a>, <a href=\'https://en.wikipedia.org/wiki/UTC%2B07:00\'>UTC+7:00</a>',
        vidNum:1,
        name:'Copper Oxidizing In Minecraft (25x Speed)',
        thumbnail:'https://i.ytimg.com/vi/3xWlN71iqaA/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEAgZShIMA8=&rs=AOn4CLB4gnEyEy5tFW0-_wHQA1EEU2-x8g'
    },
    {
        vidId:'dQw4w9WgXcQ',
        uploadDate:'<span style=\'color:#ffffde;font-weight:bold;\'>13:57:33</span> on <a href=\'https://en.wikipedia.org/wiki/Portal:Current_events/2009_October_25\'>25 October 2009</a>, <a href=\'https://en.wikipedia.org/wiki/UTC%2B07:00\'>UTC+7:00</a>',
        vidNum:0,
        name:'Rick Astley - Never Gonna Give You Up (Official Music Video)',
        thumbnail:'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDv2Q0yAnW19SsfDxlWNZc2MfRnvQ'
    }
];

function randVideo() {
    let video = videos[Math.floor(Math.random()*videos.length)];
    document.getElementById('ytThumbnailImg').src = video.thumbnail;
    document.getElementById('ytLink').href = ['https://www.youtube.com/watch?v=',video.vidId].join('');
    document.getElementById('ytTitle').innerHTML = ['<a class=\'ttl\' href=\'https://www.youtube.com/watch?v=',video.vidId,'\'>',video.name,'</a>'].join('');
    if (video.vidNum == 0) {
        document.getElementById('ytProps').innerHTML = ['<b>Uploaded to YouTube:</b> ',video.uploadDate,'<br><b>Not a Bevvie Video, you just got rickrolled</b>'].join('');
    }
    else {
        if (video.vidNum%10==1) {
            document.getElementById('ytProps').innerHTML = ['<b>Uploaded to YouTube:</b> ',video.uploadDate,'<br>Bevvie\'s <b>',video.vidNum,'</b>st video'].join('');
        }
    }
}