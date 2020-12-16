import mongoose from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const connectToDatabase = async () => {
	try {
		const DB_URL = process.env.DATABASE_URL
		await mongoose.connect(process.env.MONGODB_URI || DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
		console.log('SUCESSFULLY CONNECTED TO THE DATABASE!')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	}
}

const connectToPort = (app) => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`SERVER IS RUNNING ON PORT: ${port}`)
	})
}

const connectToFrontend = (app) => {
	if(process.env.NODE_ENV === "production"){
		app.use(express.static("../portfolio/build")) 
	}	
}


export default {
	connectToDatabase,
	connectToPort,
	connectToFrontend
}