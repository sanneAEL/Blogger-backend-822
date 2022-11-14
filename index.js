// Basic Config
const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 8000);

// Middleware
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
// Redirect
app.get('/', (req, res) => {
	// res.send('Hello world!');
	res.redirect('/blogs');
});

/* START CONTROLLERS HERE */
const blogController = require('./controllers/blogController');
app.use('/blogs/', blogController);
/* END CONTROLLERS HERE */

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
