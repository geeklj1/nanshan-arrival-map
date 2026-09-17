# 南山进场路线地图

手机适配的高德 JS API 地图：A 线、B 线、蛇口摆渡。已去掉华侨城站，B 线从世纪村开始。点位与路线精度说明保留在页面中。

GitHub Actions 生成静态文件并部署 GitHub Pages。配置 AMAP_KEY，以及 AMAP_SERVICE_HOST 代理地址或 AMAP_SECURITY_JS_CODE。

注意：静态直连方式会将安全密钥写入网站 config.js，访问者可以查看；GitHub Secrets 仅隐藏仓库中的配置，不会隐藏最终页面中的值。生产环境建议使用服务端代理。

页面增加手机号前端校验，刷新页面后需重新输入。此校验不构成身份认证或内容访问保护，地图数据仍为公开静态文件。
