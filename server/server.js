import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import articles from "./articles.js";

const app = express();

// App Config
const PORT = process.env.port || 8000;
const connection =
	"mongodb+srv://zakaria_imzilen:MLda2P7dmeeBj6FK@cluste.y0a4r.mongodb.net/blog?retryWrites=true&w=majority";

// MiddleWares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.get("/", (req, res) => {
	articles.find((err, data) => {
		if (err) {
			res.status(500).send(err.message);
		} else {
			res.status(200).send(data);
		}
	});
});

app.get("/article", (req, res) => {
	let { id } = req.query;
	articles.find({ id: id }, (err, data) => {
		if (err) {
			res.status(500).send(err.message);
		} else {
			if (data.length == 0) {
				res.status(200).send({ result: false });
			} else {
				res.status(200).send(data);
			}
		}
	});
});

app.post("/cms/edit", (req, res) => {
	articles.updateOne(
		{ id: req.body.id },
		{ $set: { title: req.body.title, description: req.body.description } },
		(err, data) => {
			if (err) throw err;
			res.status(201).send(data);
		}
	);
});

app.post("/cms/delete", (req, res) => {
	articles.deleteOne({ id: req.body.id }, (err, data) => {
		if (err) throw err;
		res.status(201).send(data);
	});
});

// DB Config
mongoose.connect(connection);

// Listener
app.listen(PORT, () => console.log("Server is listening"));
