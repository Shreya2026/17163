import shortid from 'shortid'
import Url from '../model/url.model.js'

export async function handleRedirectWeb(req, res) {
    const { shortid } = req.params;
    const url = await Url.findOne({shortUrl: shortid});
    if(!url){
        return res.status(404).json({ error: 'URL not found' });
    }
    url.clickedHistory.push({ timestamp: new Date() });
    await url.save();
    return res.redirect(url.originalUrl);
}

export async function handleGetAnalytics(req, res) {
    const { shortid } = req.params;
    const url = await Url.findOne({ shortUrl: shortid });
    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }
    return res.status(200).json({ analytics: url.clickedHistory });
}

export async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortId = shortid();

    await Url.create({
        originalUrl: body.url,
        shortUrl: shortId,
        clickedHistory: []
    });

    return res.status(201).json({ shortUrl: shortId });
}