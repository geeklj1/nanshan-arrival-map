import {mkdir,copyFile,writeFile} from 'node:fs/promises';
const {AMAP_KEY,AMAP_SECURITY_JS_CODE,AMAP_SERVICE_HOST}=process.env;
if(!AMAP_KEY || (!AMAP_SECURITY_JS_CODE&&!AMAP_SERVICE_HOST))throw new Error('Map configuration required');
await mkdir('site',{recursive:true});
for(const file of ['index.html','style.css','app.js','data.js','.nojekyll'])await copyFile(file,'site/'+file);
const security=AMAP_SERVICE_HOST?{serviceHost:AMAP_SERVICE_HOST}:{securityJsCode:AMAP_SECURITY_JS_CODE};
await writeFile('site/config.js','window.AMAP_KEY='+JSON.stringify(AMAP_KEY)+';window._AMapSecurityConfig='+JSON.stringify(security)+';');
console.log('GitHub Pages output ready.');
