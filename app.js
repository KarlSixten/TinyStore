import Express from 'express';

import testRouter from './routers/testRouter.js';
import recommendationsRouter from './routers/recommendationsRouter.js';

const app = Express();

app.use('/api/test', testRouter);
app.use('/api/recommendations', recommendationsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running on port:', PORT));