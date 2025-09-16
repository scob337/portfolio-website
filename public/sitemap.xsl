<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html dir="rtl" lang="ar">
      <head>
        <title>خريطة الموقع - عبد التواب شعبان</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            direction: rtl;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
            color: white;
            padding: 40px;
            text-align: center;
          }
          
          .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
          }
          
          .header p {
            font-size: 1.1rem;
            opacity: 0.9;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 30px;
            flex-wrap: wrap;
          }
          
          .stat {
            text-align: center;
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
          }
          
          .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
          }
          
          .content {
            padding: 40px;
          }
          
          .url-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          }
          
          .url-table th {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 20px 15px;
            text-align: right;
            font-weight: 600;
            color: #2c3e50;
            border-bottom: 2px solid #dee2e6;
          }
          
          .url-table td {
            padding: 15px;
            border-bottom: 1px solid #f1f3f4;
            vertical-align: middle;
          }
          
          .url-table tr:hover {
            background-color: #f8f9fa;
            transform: translateY(-1px);
            transition: all 0.3s ease;
          }
          
          .url-link {
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }
          
          .url-link:hover {
            color: #2980b9;
            text-decoration: underline;
          }
          
          .priority {
            display: inline-block;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            text-align: center;
          }
          
          .priority-high {
            background: #e8f5e8;
            color: #2e7d32;
          }
          
          .priority-medium {
            background: #fff3e0;
            color: #f57c00;
          }
          
          .priority-low {
            background: #fce4ec;
            color: #c2185b;
          }
          
          .lastmod {
            color: #666;
            font-size: 0.9rem;
          }
          
          .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #666;
            border-top: 1px solid #dee2e6;
          }
          
          .footer a {
            color: #3498db;
            text-decoration: none;
          }
          
          .footer a:hover {
            text-decoration: underline;
          }
          
          @media (max-width: 768px) {
            .header h1 {
              font-size: 2rem;
            }
            
            .stats {
              gap: 20px;
            }
            
            .content {
              padding: 20px;
            }
            
            .url-table {
              font-size: 0.9rem;
            }
            
            .url-table th,
            .url-table td {
              padding: 10px 8px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>خريطة الموقع</h1>
            <p>عبد التواب شعبان - مطور واجهات أمامية</p>
            <div class="stats">
              <div class="stat">
                <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                <span class="stat-label">إجمالي الصفحات</span>
              </div>
              <div class="stat">
                <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></span>
                <span class="stat-label">صفحات رئيسية</span>
              </div>
              <div class="stat">
                <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/articles/')])"/></span>
                <span class="stat-label">مقالات</span>
              </div>
            </div>
          </div>
          
          <div class="content">
            <table class="url-table">
              <thead>
                <tr>
                  <th>رابط الصفحة</th>
                  <th>الأولوية</th>
                  <th>آخر تحديث</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:sort select="sitemap:priority" order="descending"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}" class="url-link" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span>
                        <xsl:attribute name="class">
                          priority
                          <xsl:choose>
                            <xsl:when test="sitemap:priority >= 0.8">priority-high</xsl:when>
                            <xsl:when test="sitemap:priority >= 0.5">priority-medium</xsl:when>
                            <xsl:otherwise>priority-low</xsl:otherwise>
                          </xsl:choose>
                        </xsl:attribute>
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td class="lastmod">
                      <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          
          <div class="footer">
            <p>
              تم إنشاء هذه الخريطة تلقائياً لمساعدة محركات البحث في فهرسة الموقع.
              <br/>
              <a href="https://abdo-front-end.netlify.app" target="_blank">زيارة الموقع الرئيسي</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>