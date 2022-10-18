"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
// import { CircuitBreaker } from './circuit-breaker/CircuitBreaker';
// import { BreakerOptions } from './circuit-breaker/BreakerOptions';
const express = require('express');
const app = express();
const port = 3000;
// const breaker1 = new CircuitBreaker(
//   {
//     method: 'get',
//     url: 'http://localhost:3000',
//   },
//   new BreakerOptions(3, 5, 5000)
// );
app.get('/', (req, res) => {
    const numberGenerated = Math.random();
    if (numberGenerated > 0.5) {
        res.status(200).send({ numberGenerated });
    }
    else {
        res.status(400).send({ numberGenerated });
    }
});
// app.get('/bookings', (req: Request, res: Response) => {
//   const payload = req.body;
//   console.log(payload);
//   if (payload) {
//     res.status(200).send({
//       status: true,
//       message: 'ticket booked successfully',
//       dateTime: Date.now(),
//       booking_status: 'booked',
//     });
//   }
// });
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
//# sourceMappingURL=index.js.map