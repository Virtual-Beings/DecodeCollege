"use strict";
const mongoose = require('mongoose');

const File = mongoose.model('File', new mongoose.Schema({
	name: { type: String, allowNull: false },
	filePath: { type: String, allowNull: false },
	itemId: { type: mongoose.ObjectId, allowNull: true },
	itemType: { type: String, enum: ['assignment', 'notes'], allowNull: false }
}, { timestamps: true }));

module.exports = File;