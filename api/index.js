//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? HORACIO 

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const initLoader = require('./src/tools/initLoader');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3001;
  server.listen(PORT, async () => {
    console.log(`%s Listening at PORT ${PORT}`);
    await initLoader();
    console.log('Tipos de Dietas Cargados...');    
  });
});