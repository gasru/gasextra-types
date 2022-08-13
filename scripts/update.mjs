import 'zx/globals';

const extraDir = './../../../gitlab.com/training-and-progress/learn-google-apps-script/src/types/';
const targetDir = './src/types/';

fs.mkdirSync(targetDir, { recursive: true });

fs.copySync(path.resolve(extraDir, 'sheets_v4.js'), path.resolve(targetDir, 'sheets_v4.js'));
