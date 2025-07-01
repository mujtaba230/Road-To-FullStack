const express = require('express');
const sanitizeHtml = require('sanitize-html');
const router = express.Router();

router.post('/', (req, res) => {
  const { bio } = req.body;
  const cleanBio = sanitizeHtml(bio, { allowedTags: ['b', 'i', 'em', 'strong', 'p'] });
  res.json({ sanitizedBio: cleanBio });
});

module.exports = router;