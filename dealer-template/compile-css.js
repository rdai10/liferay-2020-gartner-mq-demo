const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

fs.readdirSync('./src/scss').forEach(file => {
  const data = sass.renderSync({
    data: fs.readFileSync(path.join('./src/scss', file), 'utf8')
  });

  const filePath = path.join(
    './src/dealer-collection/',
    file.replace('.scss', ''),
    'styles.css'
  );

  fs.writeFileSync(filePath, data.css);
});
