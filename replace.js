const fs = require('fs');
const path = require('path');

const directoryPath = 'c:\\note\\cheongna-nanum-blog';

const replacements = [
    { from: /청라나눔내과/g, to: '청라나눔내과' },
    { from: /청라나눔내과의원/g, to: '청라나눔내과의원' },
    { from: /032-567-0750/g, to: '032-567-0750' },
    { from: /청라한내로 90 MK뷰 빌딩 5층/g, to: '청라한내로 90 MK뷰 빌딩 5층' },
    { from: /청라국제도시 청라동/g, to: '청라국제도시 청라동' },
    { from: /청라/g, to: '청라' },
    { from: /청라동/g, to: '청라동' },
    { from: /cheongna-nanum/g, to: 'cheongna-nanum' },
    { from: /cheongna-nanum-blog/g, to: 'cheongna-nanum-blog' },
    { from: /08:30 - 18:30/g, to: '08:30 - 18:30' },
    { from: /08:30 ~ 18:30/g, to: '08:30 ~ 18:30' },
    { from: /08:30 - 14:00/g, to: '08:30 - 14:00' },
    { from: /08:30 ~ 14:00/g, to: '08:30 ~ 14:00' },
    { from: /내과 전문의 상주/g, to: '내과 전문의 상주' },
    { from: /소화기내과 전문의 상주/g, to: '소화기내과 전문의 상주' },
    { from: /전문의/g, to: '전문의' }
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (f === 'node_modules' || f === '.git' || f === '.next') return;
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(directoryPath, function (filePath) {
    if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.js') && !filePath.endsWith('.md') && !filePath.endsWith('.json') && !filePath.endsWith('.css')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    replacements.forEach(r => {
        newContent = newContent.replace(r.from, r.to);
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
});
console.log('Replacement complete.');
